import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'bm-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {

  book$: Observable<Book>;

  constructor(
    private bookService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bookService.getSingle(isbn))
    )
  }

  update(book: Book){
    this.bookService.update(book).subscribe(updatedBook => {
      this.router.navigate(['/books', updatedBook.isbn]);
    })
  }

}
