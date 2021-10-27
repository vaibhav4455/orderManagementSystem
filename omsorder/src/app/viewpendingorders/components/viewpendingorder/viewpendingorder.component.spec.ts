import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpendingorderComponent } from './viewpendingorder.component';

describe('ViewpendingorderComponent', () => {
  let component: ViewpendingorderComponent;
  let fixture: ComponentFixture<ViewpendingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpendingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpendingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
