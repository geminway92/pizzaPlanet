import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { UsersService } from '../../services/users.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
import { HomeComponent } from '../../home/home.component';
import { MainPizzaComponent } from '../main-pizza/main-pizza.component';
import { AddressesComponent } from '../addresses/addresses.component';
import { PayComponent } from '../pay/pay.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Location } from '@angular/common';
import { Inject } from '@angular/core';
import { LoginFormComponent } from '../../auth/login-form/login-form.component';


describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let router: Router;
  let compiled: HTMLElement
  
  const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'main-pizza', component: MainPizzaComponent },
    { path: 'addresses', component: AddressesComponent },
    { path: 'pay', component: PayComponent, ...canActivate(() => redirectUnauthorizedTo(['/home'])) },
    { path: 'auth', loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)},
    { path: 'login', component: LoginFormComponent}
  ];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        OrdersComponent,
      ],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [ UsersService]
    })
    .compileComponents();
  });

  beforeEach( async ()  => {
    router = TestBed.inject(Router);
    let location: Location = TestBed.inject(Location)
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;

    router.initialNavigation()
    
  });

  
  



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('If I click on "Hacer Pedido" and I am logged in...', () => {
    test('should take me to the path /addresses', () => {
      
      let buttonAA =  compiled.querySelector('button')
      buttonAA?.click()
      fixture.detectChanges();
      

      expect( router.url).toBe('/addresses')
      
    
    })
  })

  describe('If I click on "Hacer Pedido" and I am not logged in...', () => {

    test('should redirect me to the path /login', waitForAsync( () => {
      let buttonAA =  compiled.querySelector('button')
      buttonAA?.click()
      fixture.detectChanges();

      expect( router.url).toBe('/login')
    }))
  })
});
