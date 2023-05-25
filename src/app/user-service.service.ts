import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [
    {id:1, name: 'Jhon Doe', age:30, gender:'male', position:'BackEnd', email: 'jhon@gmail.com',maritalStatus: 'Married', addresses: [{ address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }]},
    {id:2, name: 'Jane Smith', age:30, gender:'female', position:'FrontEnd', email: 'jhon@gmail.com',maritalStatus: 'Married', addresses: [{ address: '123 Main St', zipCode: '12345', city: 'New York', country: 'USA' }]},
    {id:3,name:'Mark Johnson',age:35,gender:'male',position:'BackEnd',email:'mark.johnson@example.com',maritalStatus:'Married',addresses:[{address:'789 Oak Ave',zipCode:'98765',city:'Chicago',country:'USA'}]},
    {id:4,name:'Sarah Wilson',age:32,gender:'female',position:'QualityAssurance',email:'sarah.wilson@example.com',maritalStatus:'Single',addresses:[{address:'321 Pine St',zipCode:'54321',city:'San Francisco',country:'USA'}]},
    {id:5,name:'Michael Brown',age:27,gender:'male',position:'FrontEnd',email:'michael.brown@example.com',maritalStatus:'Single',addresses:[{address:'987 Elm St',zipCode:'54321',city:'Seattle',country:'USA'}]},
    {id:6,name:'Emily Johnson',age:33,gender:'female',position:'QualityAssurance',email:'emily.johnson@example.com',maritalStatus:'Married',addresses:[{address:'654 Oak Ave',zipCode:'98765',city:'Boston',country:'USA'}]},
    {id:7,name:'Dàvid Smith',age:31,gender:'male',position:'BackEnd',email:'david.smith@example.com',maritalStatus:'Single',addresses:[{address:'321 Pine St',zipCode:'12345',city:'San Francisco',country:'USA'}]}

  ];

  addUserEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  getUsers(searchQuery?: string): any[] {
    if (searchQuery) {
      const formattedSearchQuery = this.formatSearchQuery(searchQuery);
      return this.users.filter(user => {
        const formattedName = this.formatSearchQuery(user.name);
        return formattedName.includes(formattedSearchQuery);
      });
    }
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

  private formatSearchQuery(text: string): string {
    return text.toLowerCase().replace(/[^\w\s]/gi, '');
  }
}
