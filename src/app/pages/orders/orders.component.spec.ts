import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { UsersService } from '../../services/users.service';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      providers: [ UsersService, FirestoreModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('If I click on "Hacer Pedido" and I am logged in...', () => {
    test.only('should take me to the path /addresses', () => {
      expect(component.goRoute.arguments).toBe('/addresses')
    })
  })

  describe('If I click on "Hacer Pedido" and I am not logged in...', () => {

    test('should redirect me to the path /login', () => {

    })
  })
});
