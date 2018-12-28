import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'unf-error-card',
    templateUrl: './error-card.component.html',
    styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {

    @Input() public title: string = 'An Error Occured';
    @Input() public message: string = 'An error occured, but we don\'t have any details.';

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
