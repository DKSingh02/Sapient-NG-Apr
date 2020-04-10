import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    template: `
        <h3>{{title}}</h3>
    `
})
export class HomeComponent {
    title: string = 'Home';
    constructor() { }
    ngOnInit() {

    }
}