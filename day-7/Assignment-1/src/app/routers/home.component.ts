import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home',
    template: `
        <h1>Home {{title}}</h1>
    `
})
export class HomeComponent {
    urlsec: any;
    title: string;
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        //url
        this.routerState.url.subscribe(urlinfo => {
            urlinfo.forEach(urlseg => {
                console.log(urlseg.path);
                this.urlsec = urlseg
            });
        });
        //data 
        this.routerState.data.subscribe(info => {
            console.log(info);
            this.title = info.title
        }

        )
    }
}