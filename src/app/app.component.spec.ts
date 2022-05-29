import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersService } from './services/users.service';
import { FirestoreModule, Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { SliderScrollComponent } from './slider-scroll/slider-scroll.component';
import { SliderComponent } from './slider/slider.component';

import { OrdersComponent } from './pages/orders/orders.component';
import { PayComponent } from './pay/pay.component';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AuthModule, provideAuth, getAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { APP_BASE_HREF } from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AuthModule,
        HttpClientModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        AppComponent,
        HomeComponent,
        PayComponent,
        OrdersComponent,
        SliderComponent,
        SliderScrollComponent,
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    
  });

  test(`should have as title 'pizzaPlanet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pizzaPlanet');
  });

});
