import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  template: `
  <div class="container">
    <form (submit)="onSubmit()">
      <label for="name">Name:</label>
      <input type="text" id="name" [(ngModel)]="name">
      
      <label for="description">Description:</label>
      <textarea id="description" [(ngModel)]="description"></textarea>
      
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

  onSubmit() {
    const task = { name: this.name, description: this.description };
    this.addTask.emit(task);
    this.name = '';
    this.description = '';
  }
}
