import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteordersComponent } from './completeorders.component';

describe('CompleteordersComponent', () => {
  let component: CompleteordersComponent;
  let fixture: ComponentFixture<CompleteordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
