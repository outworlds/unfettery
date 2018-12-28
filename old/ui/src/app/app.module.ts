import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { DashboardsModule } from './dashboards/dashboards.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonsModule,
        DashboardsModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
