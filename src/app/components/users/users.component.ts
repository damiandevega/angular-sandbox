import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '40 Main st',
          city: 'New York',
          state: 'NY'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 29,
        address: {
          street: '343 Twain st',
          city: 'Newark',
          state: 'NJ'
        }
      },
      {
        firstName: 'Stephanie',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '7777 Mill st',
          city: 'Miami',
          state: 'FL'
        }
      }
    ]

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 22,
      address: {
        street: '12 Wake st',
        city: 'Boson',
        state: 'MA'
      }
    })
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
