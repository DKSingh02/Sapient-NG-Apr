import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/types';


@Component({
  selector: 'app-company',
  templateUrl: 'company.component.html',

})
 class CompanyComponent implements OnInit {
   
  title: string = 'Company Details...';
  @Input()
  companyDetails: Company;
  constructor() { }

  ngOnInit() {
    console.log(this.companyDetails);
  }
  
}

export default CompanyComponent;