import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { IsbnPipe } from './shared/isbn.pipe';
import { ConfirmDirective } from './shared/confirm.directive';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookListItemComponent,
    IsbnPipe,
    ConfirmDirective,
  ],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
