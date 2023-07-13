import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;
  results$: Observable<Book[]>;

  constructor(private bookService: BookStoreService){
    this.results$ = this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged((a, b) => {
        return JSON.stringify(a) === JSON.stringify(b)
      }),
      tap(() => this.isLoading = true),
      switchMap(term => this.bookService.getAllSearch(term)),
      tap(() => this.isLoading = false)
    );
  }
}


