import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCartComponent } from './display-cart.component';

describe('DisplayCartComponent', () => {
  let component: DisplayCartComponent;
  let fixture: ComponentFixture<DisplayCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCartComponent]
    });
    fixture = TestBed.createComponent(DisplayCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
