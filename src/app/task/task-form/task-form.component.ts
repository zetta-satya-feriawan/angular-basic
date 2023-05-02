import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  template: `
  <div class="container">
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" >
      <label for="name">Name:</label>
      <input type="text" name="name" ngModel #first="ngModel"> 
      
      <label for="description">Description:</label>
      <textarea name="description" ngModel></textarea>
      
      <button type="submit">Add Task</button>
    </form>
  </div>
  `,
  styles: [
    `
    .container{
      display: flex;
      justify-content: center;
    }
    form{
      border:2px solid black;
      padding:15px;
      border-radius:5px;
    }
    label{
      display:block;
    }
    textarea{
      display: block;
    }
    button{
      border: solid green 1px;
      padding: 4px;
      margin:5px;
      border-radius:5px;
    }                
    `
  ]
})
export class TaskFormComponent {
  name: string = '';
  description: string = '';
  @Output() addTask = new EventEmitter<any>();

  onSubmit(f: NgForm) {
    this.addTask.emit(f.value); 
  }
}
