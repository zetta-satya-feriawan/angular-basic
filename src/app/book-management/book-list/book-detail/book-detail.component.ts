import { Component } from '@angular/core';
import { BookManagementService } from '../../../book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  selectedBook: any = null;

  constructor(private bookManagementService: BookManagementService) { }

  ngOnInit(): void {
    this.bookManagementService.selectedBook.subscribe((book: any) => {
      this.selectedBook = book;
    });
  }

}
