import { Component, Input } from '@angular/core';
import { Data } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;

  constructor(private dataService: Data) {     
  }

  update() {
    this.dataService.updateCard(this.data.id);
  }
}
