import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetalsComponent } from './order-detals.component';

describe('OrderDetalsComponent', () => {
  let component: OrderDetalsComponent;
  let fixture: ComponentFixture<OrderDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
