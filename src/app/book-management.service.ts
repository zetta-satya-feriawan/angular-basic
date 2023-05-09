import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  private booksSource = new BehaviorSubject<any[]>([]);
  books = this.booksSource.asObservable();

  private selectedBookSource = new BehaviorSubject<any>({});
  selectedBook = this.selectedBookSource.asObservable();


  updateBooks(books: any[]) {
    this.booksSource.next(books);
  }

  selectBook(book: any) {
    this.selectedBookSource.next(book);
  }
}
