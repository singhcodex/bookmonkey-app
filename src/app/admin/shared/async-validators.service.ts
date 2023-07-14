import { Injectable } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorsService {
  constructor(private bookService: BookStoreService) {}

  isbnExists(): AsyncValidatorFn {
    return (control) => {
      return this.bookService
        .check(control.value)
        .pipe(map((exists) => (exists ? { isbnExists: true } : null)));
    };
  }
}
