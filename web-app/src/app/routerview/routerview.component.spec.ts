import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterviewComponent } from './routerview.component';

describe('RouterviewComponent', () => {
  let component: RouterviewComponent;
  let fixture: ComponentFixture<RouterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
