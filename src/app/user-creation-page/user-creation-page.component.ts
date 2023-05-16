import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.css']
})
export class UserCreationPageComponent implements OnInit {
  userForm: FormGroup;
  isEditMode: boolean = false;
  userId: number | undefined;
  currentLanguage: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private translateService: TranslateService,
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
      addresses: this.formBuilder.array([this.createAddressFormGroup()])
  })}

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  get addresses():FormArray{
    return this.userForm.get('addresses') as FormArray;
  }

  addAddress(){
    this.addresses.push(this.createAddressFormGroup())
    console.log(this.userForm.get('addresses'));
    
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['userId']) {
        this.isEditMode = true;
        this.userId = parseInt(params['userId'], 10);
        this.loadUserData();
      }
    });
    console.log('test', this.userForm.get('addresses'));
    
  }



  loadUserData() {
    if (this.route.snapshot.queryParams['userId']) {
      this.isEditMode = true;
      this.userId = parseInt(this.route.snapshot.queryParams['userId'], 10);
      const user = this.userService.getUserById(this.userId);
      if (user) {
        this.userForm.patchValue(user);
        const addresses = this.userForm.get('addresses') as FormArray;
        addresses.clear();
        user.addresses.forEach((address: any) => {
          const addressFormGroup = this.createAddressFormGroup();
          addressFormGroup.setValue(address);
          addresses.push(addressFormGroup);
        });
        console.log('waktu submit',user, this.addresses.controls)
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
    console.log(this.userForm.value);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translateService.use(this.currentLanguage);
  }
}