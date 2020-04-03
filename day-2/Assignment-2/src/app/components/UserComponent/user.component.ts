import { Component, Input, OnInit } from '@angular/core';
import { UsersData, Address, Company } from '../../types';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{

  title: string = 'User Compoent';
  addressDetails: Address[];
  companyDetails: Company[];

  @Input()
  usersDetails: UsersData[];
  constructor() { }

  ngOnInit() {
    this.addressDetails = this.usersDetails.map((user) => {
        return user.address;
    });
    this.companyDetails = this.usersDetails.map((user) => {
      return user.company;
    });
  }
}
