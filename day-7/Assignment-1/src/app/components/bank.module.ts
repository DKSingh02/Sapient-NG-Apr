import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { BillPaymentComponent } from './bill-payment-recharge/bill-payment-recharge.component';

@NgModule({
  declarations: [
    HomeComponent,
    FundTransferComponent, OffersComponent,
    AccountsComponent, BillPaymentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class BankModule { }
