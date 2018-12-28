import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './home/landing-page.component';
import { NoContentComponent } from './home/no-content.component';
import { CommonsModule } from 'commons/commons.module';

@NgModule({
    imports: [
        CommonModule,
        CommonsModule,
    ],
    declarations: [
        LandingPageComponent,
        NoContentComponent,
    ],
    exports: [
        LandingPageComponent,
        NoContentComponent,
    ]
})
export class DashboardsModule {
}
