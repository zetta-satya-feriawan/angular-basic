import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    BookManagementComponent 
  ]
})
export class BookManagementModule { }
