import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'dateOfBirth', 'gender'];
  currentLanguage: string = 'en';
  constructor(private userService: UserService, private translateService: TranslateService) {
    this.translateService.use('en')
  }
  ngOnInit(): void {
    this.userService.getUserSubject().subscribe(users => {
      this.users = users;
    });
    
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translateService.use(this.currentLanguage);
  }
}
