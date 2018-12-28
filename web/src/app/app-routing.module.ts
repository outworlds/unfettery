import { NgModule, Injectable } from '@angular/core';
import { Route, Routes, RouterModule, PreloadingStrategy } from '@angular/router';

import { of, Observable } from 'rxjs';

import { LandingPageComponent } from 'dashboards/home/landing-page.component';
import { NoContentComponent } from 'dashboards/home/no-content.component';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

    public preloadedModules: string[] = [];

    public preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path as string);
            return load();
        }
        return of(null);
    }

}

const routes: Routes = [
    { path: 'home', component: LandingPageComponent, },
    { path: '',     redirectTo: 'home', pathMatch: 'full' },
    { path: '**',   component: NoContentComponent, },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                useHash: true,
                preloadingStrategy: SelectivePreloadingStrategy,
                enableTracing: false,
            }
        )
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        SelectivePreloadingStrategy,
    ]
})
export class AppRoutingModule {
}
