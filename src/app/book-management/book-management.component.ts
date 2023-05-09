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
      author: 'Author Shiba A',
      publisher: 'Publisher A',
      publishDate: '2023-01-01'
    },
    {
      name: 'Book 2',
      author: 'Author Shiba B',
      publisher: 'Publisher B',
      publishDate: '2023-02-01'
    },
    {
      name: 'Book 3',
      author: 'Author Shiba C',
      publisher: 'Publisher C',
      publishDate: '2023-03-01'
    }
  ];

  constructor(private bookManagementService: BookManagementService) { }

  ngOnInit(): void {
    this.bookManagementService.updateBooks(this.books);
  }

}
