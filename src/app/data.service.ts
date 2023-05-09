import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private cardsData = [
    { id: 1, title: 'Card 1', description: 'This is card 1.' },
    { id: 2, title: 'Card 2', description: 'This is card 2.' },
    { id: 3, title: 'Card 3', description: 'This is card 3.' }
  ];

  cards = new BehaviorSubject<any[]>(this.cardsData);
  
  

  updateCard(id: number) {
    const cardIndex = this.cardsData.findIndex(card => card.id === id);
    if (cardIndex >= 0) {
      this.cardsData[cardIndex].description += ' Updated';
      this.cards.next(this.cardsData);
    }
  }

  updateAll() {
    this.cardsData.forEach(card => {
      card.description += ' Updated';
    });
    this.cards.next(this.cardsData);
  }
}
