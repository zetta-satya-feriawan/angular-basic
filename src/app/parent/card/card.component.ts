import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
    </div>
  `
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() title: string = "";
  @Input() subtitle: string ="";
  counter = 0;
  interval:any;
  constructor() {
    console.log('Card Component Constructor');
  }

  ngOnInit():void {
    console.log('Card Component OnInit');
    this.interval = setInterval(()=>{
      this.counter++
      console.log(this.counter);
    },1000)
  }

  ngOnDestroy() {
      console.log('Card Component Destroy');
      clearInterval(this.interval)
  }
}
