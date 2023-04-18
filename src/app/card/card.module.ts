import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumbnailComponent } from './tumbnail/tumbnail.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    TumbnailComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TumbnailComponent,
    AboutComponent
  ]
})
export class CardModule { }
