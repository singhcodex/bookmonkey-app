import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookmonkey App';
  book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
    this.book = book;
  }
}
