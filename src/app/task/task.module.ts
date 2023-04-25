import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskModule { }
