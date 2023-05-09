import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookManagementComponent // export the BookManagementComponent so it can be used outside the module
  ]
})
export class BookManagementModule { }
