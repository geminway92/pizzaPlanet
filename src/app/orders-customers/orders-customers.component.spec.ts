import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCustomersComponent } from './orders-customers.component';

describe('OrdersCustomersComponent', () => {
  let component: OrdersCustomersComponent;
  let fixture: ComponentFixture<OrdersCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
