import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-task-list',
  template: `
  <div class="container">
    <div class="card" *ngFor="let task of tasks">
      <app-task-details [task]="task"></app-task-details>
    </div>
    <app-task-form (addTask)="onAddTask($event)"></app-task-form>
  </div>
  `,
  styles:[
    `.card{
      padding:10px;
      margin:20px;
      border: 5px solid black;
    }
    .container{
      padding-top:40px;
    }`
  ]
})
export class TaskListComponent {
  tasks = [
    { id: 1, name: 'Task 1', description: 'Description for task 1' },
    { id: 2, name: 'Task 2', description: 'Description for task 2' },
    { id: 3, name: 'Task 3', description: 'Description for task 3' }
  ];

  onAddTask(task: any) {
    this.tasks.push(task);
    console.log(this.tasks);
    
    // console.log(task);
    
  }

  onSelectTask(task: any) {
    console.log('Task selected:', task);
  }
  
}

