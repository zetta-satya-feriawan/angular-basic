import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: any;

  constructor(private router: Router) { }

  editUser() {
    this.router.navigate(['/user', this.user.id]);
  }
}
