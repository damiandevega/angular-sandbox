import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // methods
  constructor() {
    this.firstName = 'Damian';
    this.lastName = 'de Vega';
    this.age = 30;

    this.address = {
      street: '40 Main Street',
      city: 'New York',
      state: 'NY'
    }

    this.foo = true;
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['hello', 'world'];
    this.mixedArray = [true, 1, '2'];
    this.myTuple = ['hello', 1, false];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log(this.addNumbers(2, 3));
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}