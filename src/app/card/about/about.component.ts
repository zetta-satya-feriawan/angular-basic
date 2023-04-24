import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  cards = [
    { title: 'Awsome Title IS HEREE!!!', status: 'Like' },
  ];

  onCardClick(card: any) {
    card.status = card.status === 'Like' ? 'Unlike' : 'Like';
  }
}
