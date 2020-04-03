import { Component, OnInit } from '@angular/core';
import { UsersData } from './types'
import Users from '../mocks/users';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

  title: string = 'App Component...';

  usersDetails:  UsersData[];
  constructor() { }

  ngOnInit() {
    this.usersDetails = Users;
  };
}
