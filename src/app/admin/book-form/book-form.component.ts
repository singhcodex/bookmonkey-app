import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Output() submitBook = new EventEmitter<Book>()

  // book: Book = {
  //   isbn: '',
  //   title: '',
  //   authors: ['']
  // };

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    subtitle: new FormControl('', {nonNullable: true}),
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    description: new FormControl('', {nonNullable: true }),
    published: new FormControl('', {nonNullable: true}),
    thumbnailUrl: new FormControl('', {nonNullable: true}),
    authors: new FormArray([
      new FormControl('', { nonNullable: true})
    ])
  })

  get authors(){
    return this.form.controls.authors;
  }

  addAuthorControl(){
    this.authors.push(
      new FormControl('', {nonNullable: true})
    );
  }

  private buildAuthorsArray(authors: string[]){
    return new FormArray(
      authors.map(v => new FormControl(v, {nonNullable: true}))
    )
  }

  submitForm(){
    //this.submitBook.emit(this.book);
    const formValue = this.form.getRawValue();
    const authors = formValue.authors.filter(author => !!author)

    const newBook: Book = {...formValue, authors}
    this.submitBook.emit(newBook);
  }
}
