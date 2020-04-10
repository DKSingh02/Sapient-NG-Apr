import { Component } from '@angular/core';

@Component({
    selector: 'app-transction',
    template: `
        <h3>Transactions</h3>
        <img src="assets/images/fund-transfer.jpg" alt="Image">           
    `
})
export class FundTransferComponent {
    constructor() { }
    ngOnInit() {
    }
}