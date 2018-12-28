import { Component, OnInit, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

@Component({
    selector: 'unf-header-navigation',
    templateUrl: './header-navigation.component.html',
    styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

    @Input() banner$: Observable<any[]>;

    public title$: Observable<string>;

    public themeClass$: Observable<string>;

    public appList = [
        {
            title: 'Threat Dashboard',
        },
        {
            title: 'Analytic Exchange',
        },
        {
            title: 'Assessments',
        },
        {
            title: 'Baselines',
        },
        {
            title: 'Intrusion Set Dashboard',
        },
        {
            title: 'Events Dashboard',
        },
    ];

    public user$;

    constructor(
    ) {
        this.title$ = of('Unfetter');
        this.themeClass$ = of('default-theme-accent');
    }

    ngOnInit() {
    }

}
