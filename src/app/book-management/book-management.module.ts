import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { BookBuyComponent } from './book-list/book-buy/book-buy.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent,
    BookBuyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    // AppRoutingModule
  ],
  exports: [
    BookManagementComponent 
  ]
})
export class BookManagementModule { }
