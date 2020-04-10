import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { OffersComponent } from '../components/offers/offers.component';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { FundTransferComponent } from '../components/fund-transfer/fund-transfer.component';
import { BillPaymentComponent } from '../components/bill-payment-recharge/bill-payment-recharge.component';

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
