import { Component } from '@angular/core';
import { BookManagementService } from '../../../book-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  display:string = ''

  books: any[]=[];
  selectedBook: any = null;

  constructor(private bookManagementService: BookManagementService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.bookManagementService.selectedBook.subscribe((book: any) => {
      this.selectedBook = book;
      console.log('test', book);
      
    });
    this.display= this.route.snapshot.params['name'] 
    if(this.display) {
      this.bookManagementService.books.subscribe((books)=>{
        this.selectedBook = books.find((book) => {
          return book.name === this.display
        })
      })
    }
  }

}
