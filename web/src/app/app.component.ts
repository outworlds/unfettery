import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { Themes } from 'commons/models/themes.enum';

@Component({
    selector: 'unf-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public theme: Themes = Themes.DEFAULT;

    banner$ = of([
        { class: 'dynamic', label: 'IMPORTANT! PROTECT WITH YOUR LIFE!!!', },
        { class: 'secret' , label: 'This... is Unfetter', },
    ]);

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
