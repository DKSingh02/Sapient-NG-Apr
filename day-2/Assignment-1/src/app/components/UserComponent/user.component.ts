import { Component, Input, OnInit } from '@angular/core';
import { RootObject, Address, Company } from '../../types';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
class UserComponent implements OnInit{
  @Input()
  usersDetails: RootObject[];
  addressDetails: Address[];
  companyDetails: Company[];
  constructor() { }
  title: string = 'User Compoent';

  ngOnInit() {
    console.log('From oninit' +  this.usersDetails);
    this.addressDetails = this.usersDetails.map((user) => {
        return user.address;
    });
    this.companyDetails = this.usersDetails.map((user) => {
      return user.company;
    });
    console.log(this.addressDetails);
  }
}

export default UserComponent;