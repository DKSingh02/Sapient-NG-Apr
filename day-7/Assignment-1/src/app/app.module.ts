import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routers/home.component';
import { OffersComponent } from './routers/offers.component';
import { AccountsComponent } from './routers/accounts.component';
import { FundTransferComponent } from './routers/fund-transfer.component';
import { BillPaymentComponent } from './routers/bill-payment-recharge.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    FundTransferComponent, OffersComponent,
    AccountsComponent, BillPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
