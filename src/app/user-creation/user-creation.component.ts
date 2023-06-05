import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent {
  // user: User = new User();
  userForm: FormGroup;
  currentLanguage: string = 'en';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private translateService: TranslateService) {
    this.userForm = this.formBuilder.group({
      civility: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.translateService.use('en')
  }

  addUser() {
    if (this.userForm.invalid) {
      Swal.fire('Error', 'Please fill in all the required fields', 'error');
      return;}
      else{
        const user = this.userForm.value;
        this.userService.addUser(user);
        Swal.fire('Success', 'User Added', 'success');

        this.router.navigate(['/']); 
      }
  }
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translateService.use(this.currentLanguage);
  }
}
