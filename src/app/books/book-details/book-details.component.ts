import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { IsbnPipe } from 'src/app/shared/isbn.pipe';
import { LoggedinOnlyDirective } from 'src/app/shared/loggedin-only.directive';
import { ConfirmDirective } from 'src/app/shared/confirm.directive';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, DatePipe, AsyncPipe, RouterLink,
  IsbnPipe,LoggedinOnlyDirective, ConfirmDirective]
})
export class BookDetailsComponent {
  @Input() book$: Observable<Book>;
  @Output() leave = new EventEmitter<void>();

  constructor(
    private bookService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.bookService.getSingle(isbn);
  }

  doLeave() {
    this.leave.emit();
  }

  removeBook(isbn: string) {
    this.bookService.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
