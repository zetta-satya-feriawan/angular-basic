import { Component } from '@angular/core';
import { Data } from '../data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cards: any[] = [];

  constructor(private dataService: Data) {
    this.dataService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }

  updateAll() {
    this.dataService.updateAll();
  }
}
