import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books$: Observable<Book[]>;
  @Output() selectBook = new EventEmitter<Book>();

  constructor(private bookService: BookStoreService) {
    this.books$ = this.bookService.getAll();
  }

  doSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
