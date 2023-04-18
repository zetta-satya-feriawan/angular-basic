import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';



@NgModule({
  declarations: [
    SearchComponent,
    BreadcumbComponent,
  ],
  imports: [
    CommonModule
  ],exports: [
    SearchComponent,
    BreadcumbComponent
  ]
})
export class SearchBarModule { }
