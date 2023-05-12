import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [
    {id:1, name: 'Jhon Doe', age:30, gender:'male', position:'Developer', email: 'jhon@gmail.com',maritalStatus: 'Single', addresses: { address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }},
    {id:2, name: 'Jane Smith', age:30, gender:'female', position:'Developer', email: 'jhon@gmail.com',maritalStatus: 'Single', addresses: { address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }}
  ];

  constructor() { }

  getUsers(): any[] {
    return this.users;
  }

  addUser(newUser: any): void {
    this.users.push(newUser);
  }
}
