// user-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: any;

  constructor(private router: Router, private userService: UserService) {}

  editUser() {
    this.router.navigate(['/create-user'], { queryParams: { userId: this.user.id } });
  }
}
