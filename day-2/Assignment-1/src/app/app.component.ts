import { Component } from '@angular/core';
import { RootObject } from './types'
import Users from '../mocks/users';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {
  usersDetails:  RootObject[];
  constructor() { 
    this.usersDetails = Users;
    console.log(this.usersDetails);
  }
  // model
  title: string = 'App Component...';
}
