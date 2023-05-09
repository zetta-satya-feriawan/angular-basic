import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  books: any[] = [
    {
      name: 'Book 1',
      author: 'Author 1',
      publisher: 'Publisher 1',
      publishDate: '2021-01-01'
    },
    {
      name: 'Book 2',
      author: 'Author 2',
      publisher: 'Publisher 2',
      publishDate: '2021-02-01'
    },
    {
      name: 'Book 3',
      author: 'Author 3',
      publisher: 'Publisher 3',
      publishDate: '2021-03-01'
    }
  ];

  constructor(private bookManagementService: BookManagementService) { }

  ngOnInit(): void {
    this.bookManagementService.updateBooks(this.books);
  }

}
