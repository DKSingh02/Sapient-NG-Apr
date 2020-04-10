import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-accounts',
    templateUrl: './account.html',
    styleUrls: ['./account.css']
})
export class AccountsComponent {
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {

    }
}