import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [
    {id:1, name: 'Jhon Doe', age:30, gender:'male', position:'BackEnd', email: 'jhon@gmail.com',maritalStatus: 'Married', addresses: [{ address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }]},
    {id:2, name: 'Jane Smith', age:30, gender:'female', position:'FrontEnd', email: 'jhon@gmail.com',maritalStatus: 'Married', addresses: [{ address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }]}
  ];
  addUserEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  getUsers(): any[] {
    return this.users;
  }

  addUser(newUser: any): void {
    this.users.push(newUser);
    this.addUserEvent.emit(newUser); 
  }
  getUserById(userId: number): any {
    return this.users.find(user => user.id === userId);
  }

  updateUser(updatedUser: any): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
}
}
