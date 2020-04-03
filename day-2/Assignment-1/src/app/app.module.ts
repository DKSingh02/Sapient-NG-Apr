import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import  * as  component from './components';
import UseComponent from './components/UserComponent/user.component';
import CompanyComponent from './components/CompanyComponent/company.component';
import AddressComponent from './components/AddressComponent/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    UseComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [UseComponent, CompanyComponent, AddressComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
