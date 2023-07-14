import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, BookListItemComponent]
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
