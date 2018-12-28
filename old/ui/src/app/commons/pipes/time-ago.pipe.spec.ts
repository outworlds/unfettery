import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { TimeAgoPipe } from './time-ago.pipe';

@Component({
    selector: 'unf-time-ago-test',
    template: '<p id="time-ago-test" title="{{date}}">{{date | timeAgo}}</p>',
})
class TimeAgoPipeTestComponent {
    public date = new Date().toISOString();
}

describe('TimeAgoPipe', () => {

    let fixture: ComponentFixture<TimeAgoPipeTestComponent>;
    let component: TimeAgoPipeTestComponent;

    const mockNgZone = jasmine.createSpyObj('mockNgZone', ['run', 'runOutsideAngular']);
    mockNgZone.onMicrotaskEmpty = jasmine.createSpyObj('onMicroTaskEmpty', ['subscribe']);
    mockNgZone.run.and.callFake(fn => fn());

    const curr = new Date().getTime();
    const spans = [
        { diff: 60 * 1000, expected: 'A minute ago', },
        { diff: 30 * 60 * 1000, expected: '30 minutes ago', },
        { diff: 1.15 * 60 * 60 * 1000, expected: 'An hour ago', },
        { diff: 6 * 60 * 60 * 1000, expected: '6 hours ago', },
        { diff: 1.4 * 24 * 60 * 60 * 1000, expected: 'A day ago', },
        { diff: 14 * 24 * 60 * 60 * 1000, expected: '14 days ago', },
        { diff: 29 * 24 * 60 * 60 * 1000, expected: 'A month ago', },
        { diff: 300 * 24 * 60 * 60 * 1000, expected: '10 months ago', },
        { diff: 400 * 24 * 60 * 60 * 1000, expected: 'A year ago', },
        { diff: 1200 * 24 * 60 * 60 * 1000, expected: '3 years ago', },
    ];

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    TimeAgoPipeTestComponent,
                    TimeAgoPipe,
                ],
                providers: [
                    ChangeDetectorRef,
                    {
                        provide: NgZone,
                        useValue: mockNgZone
                    },
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeAgoPipeTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('create an instance', () => {
        expect(component).toBeTruthy();

        const node = fixture.nativeElement.querySelector('p#time-ago-test');
        expect(node).toBeTruthy();
        expect(node.textContent).toEqual('A few seconds ago');
    });

    spans.forEach(span => {
        it('shows time difference', () => {
            component.date = new Date(curr - span.diff).toISOString();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const node = fixture.nativeElement.querySelector('p#time-ago-test');
                expect(node).toBeTruthy();
                expect(node.textContent).toEqual(span.expected);
            });
        });
    });

});
