import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookBuyComponent } from './book-management/book-list/book-buy/book-buy.component';
import { BookDetailComponent } from './book-management/book-list/book-detail/book-detail.component';

const routes: Routes = [
{path:'', component:BookManagementComponent},
// {path:'**', component:BookManagementComponent},
{path:'chart', component:BookBuyComponent},
{path:'details/:name', component:BookDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
