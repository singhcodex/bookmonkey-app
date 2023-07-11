import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() leave = new EventEmitter<void>();

  constructor(
    private bookService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.bookService.getSingle(isbn).subscribe(book => {
      this.book = book;
    })
  }

  doLeave() {
    this.leave.emit();
  }

  removeBook(isbn: string){
    if(window.confirm('Remove book?')) {
      this.bookService.remove(isbn).subscribe(() => {
        this.router.navigateByUrl('/books');
      });
    }
  }
}
