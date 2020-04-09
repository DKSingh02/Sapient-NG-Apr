import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-accounts',
    template: `
        <h1>Accounts Details</h1>
        <nav>
            <a>Date</a> | 
            <a>Narration</a> |
            <a>Cheque/Ref No</a> |
            <a>Value Date</a> |
            <a>Withdrawal</a> |
            <a>Deposit</a> |
            <a>Closing Balance</a>
        </nav>
       
    `
})
export class AccountsComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}