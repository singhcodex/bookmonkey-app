import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[] = [];
  @Output() selectBook = new EventEmitter<Book>();

  constructor(){
    this.books = [
      {
        isbn: '12345',
        title: 'Tiersch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-02',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut'
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orngaton Utan'],
        published: '2022-05-02',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/backen.png',
        description: 'Tolle Backtipps fur Mensch und Tier'
      }
    ]
  }

  doSelect(book: Book){
    this.selectBook.emit(book);
  }

}
