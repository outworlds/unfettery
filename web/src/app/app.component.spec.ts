import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    AppComponent
                ],
            }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'Unfetter'`, () => {
        expect(component.title).toEqual('Unfetter');
    });

    it('should render title in a h1 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${component.title}!`);
    });

});
