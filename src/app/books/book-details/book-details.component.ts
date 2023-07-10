import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

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
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book = this.bookService.getSingle(isbn);
  }

  doLeave() {
    this.leave.emit();
  }
}
