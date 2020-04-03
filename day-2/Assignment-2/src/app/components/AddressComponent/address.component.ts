import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/types';


@Component({
  selector: 'app-address',
  templateUrl: 'address.component.html',
})
  export class AddressComponent implements OnInit {

  title: string = 'Address Details...';

  @Input()
  addressDetails: Address;

  constructor() { }

  ngOnInit() {
    console.log(this.addressDetails);
  }
}
