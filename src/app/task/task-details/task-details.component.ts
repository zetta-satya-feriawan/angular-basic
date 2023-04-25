import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-details',
  template: `
    <div (click)="select.emit()">
      <h3>{{ task.name }}</h3>
      <p>{{ task.description }}</p>
    </div>
  `
})
export class TaskDetailsComponent {
  @Input() task: any;
  @Output() select = new EventEmitter<void>();
}