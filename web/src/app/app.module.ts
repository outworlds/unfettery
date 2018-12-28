import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonsModule,
        DashboardsModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
