import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.css']
})
export class UserCreationPageComponent implements OnInit {
  userForm: FormGroup;
  isEditMode: boolean = false;
  userId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {
    this.userForm = this.formBuilder.group({
      id: [ Math.floor( Math.random()*(100 - 3) + 3)],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      maritalStatus: ['', Validators.required],
      addresses: this.formBuilder.group({
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['userId']) {
        this.isEditMode = true;
        this.userId = parseInt(params['userId'], 10);
        this.loadUserData();
      }
    });
  }
  

  loadUserData() {
    if (this.route.snapshot.queryParams['userId']) {
      this.isEditMode = true;
      this.userId = parseInt(this.route.snapshot.queryParams['userId'], 10);
      const user = this.userService.getUserById(this.userId);
      if (user) {
        this.userForm.patchValue(user);
      } else {
        console.log('user not found');
      }
    }
  }
  
  

  onSubmit() {
    if (this.userForm.invalid) {
      return ;
    }
    const newUser = this.userForm.value;
    if (this.isEditMode) {
      this.userService.updateUser(newUser);
    } else {
      this.userService.addUser(newUser);
    }
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}