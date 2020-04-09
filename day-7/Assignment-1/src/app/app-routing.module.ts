import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routers/home.component';
import { OffersComponent } from './routers/offers.component';
import { AccountsComponent } from './routers/accounts.component';
import { FundTransferComponent } from './routers/fund-transfer.component';
import { BillPaymentComponent } from './routers/bill-payment-recharge.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'fundTransfer', component: FundTransferComponent },
  { path: 'billPayment', component: BillPaymentComponent },
  { path: 'offers', component: OffersComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
