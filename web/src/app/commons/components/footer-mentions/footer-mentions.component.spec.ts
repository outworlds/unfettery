import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMentionsComponent } from './footer-mentions.component';

describe('FooterMentionsComponent', () => {
  let component: FooterMentionsComponent;
  let fixture: ComponentFixture<FooterMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
