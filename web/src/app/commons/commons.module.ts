import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    MatCardModule,
    MatToolbarModule,
} from '@angular/material';

const material_components = [
    MatCardModule,
    MatToolbarModule,
];

import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { FooterMentionsComponent } from './components/footer-mentions/footer-mentions.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';

const unfetter_components = [
    HeaderNavigationComponent,
    FooterMentionsComponent,
    ErrorCardComponent,
];

import { CapitalizePipe } from './pipes/capitalize.pipe';

const unfetter_pipes = [
    CapitalizePipe,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...material_components,
    ],
    declarations: [
        ...unfetter_components,
        ...unfetter_pipes,
    ],
    exports: [
        ...material_components,
        ...unfetter_components,
        ...unfetter_pipes,
    ]
})
export class CommonsModule {
}
