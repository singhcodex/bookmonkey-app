import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor(private bookService: BookStoreService){
    // this.input$.pipe(
    //   filter(term => term.length >= 3),
    //   debounceTime(500),
    //   distinctUntilChanged((a, b) => {
    //     return JSON.stringify(a) === JSON.stringify(b)
    //   }),
    //   switchMap(term => this.bookService.get)
    // ).subscribe(e => console.log(e));
  }


}
