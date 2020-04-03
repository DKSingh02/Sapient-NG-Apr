import { Component, Input } from '@angular/core';



@Component({
    selector:'app-address',
    templateUrl : 'app.address.html'
})
export class AddressComponent {
    @Input()
    addr;
    @Input('addrtitle')
    title;
    constructor() { }
}