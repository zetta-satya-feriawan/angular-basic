import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <button (click)='toogleShow()'>show child card</button>
    <app-card *ngIf="isShow" [title]="'Child Card 1'" [subtitle]="'Subtitle'"></app-card>
    <app-card *ngIf="isShow"  [title]="'Child Card 2'" [subtitle]="'Subtitle'"></app-card>
<div>
  <input type="text" #myInput>
  <button (click)="logInput(myInput.value)">Log Input</button>
</div>

  <button onclick="Destroy()">Destroy</button>
  `,
  styles:[`app-card{
    display:flex;
  }`]
})
export class ParentComponent implements OnInit {
  isShow= false;
  toogleShow(){
    this.isShow = !this.isShow
  };
  logInput(value: string) {
    console.log(value);
  }

  constructor() {
    console.log('Parent Component Constructor');
  }

  ngOnInit() {
    console.log('Parent Component OnInit');
  }

}
