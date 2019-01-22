import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName = 'Damian';
  lastName = 'de Vega';
  age = 30;

  // methods
  constructor() {
    //this.sayHello()
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`)
  }

  hasBirthday() {
    this.age += 1;
  }
}