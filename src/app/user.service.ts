import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private users: any[] =   [  {
      civility: 'Mr',
      lastName: 'Smith',
      firstName: 'John',
      dateOfBirth: new Date('1990-01-01'),
      gender: 'Male'
    },
    {
      civility: 'Mrs',
      lastName: 'Johnson',
      firstName: 'Emily',
      dateOfBirth: new Date('1995-06-15'),
      gender: 'Female'
    },
    {
      civility: 'Mr',
      lastName: 'Brown',
      firstName: 'Michael',
      dateOfBirth: new Date('1985-11-30'),
      gender: 'Male'
    }
  ];;
  
    private usersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.users);

  
    getUserSubject(): BehaviorSubject<any[]> {
      return this.usersSubject;
    }
  
    addUser(newUser: any): void {
      this.users = [...this.users, newUser];
      this.usersSubject.next(this.users);
    }
  }
  
