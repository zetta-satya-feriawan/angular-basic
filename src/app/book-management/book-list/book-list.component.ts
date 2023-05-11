import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../../book-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[]=[];
  

  constructor(private bookManagementService: BookManagementService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookManagementService.books.subscribe((books: any[]) => {
      this.books = books;
    });
    this.books = [{
      name : this.route.snapshot.params['name']
    }];
  }

}
