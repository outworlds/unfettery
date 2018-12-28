import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
    selector: 'unf-footer-mentions',
    templateUrl: './footer-mentions.component.html',
    styleUrls: ['./footer-mentions.component.scss']
})
export class FooterMentionsComponent implements OnInit {

    @Input() banner$: Observable<any[]>;

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
