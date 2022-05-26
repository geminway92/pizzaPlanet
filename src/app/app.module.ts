import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore, Firestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { PayComponent } from './pages/pay/pay.component';
import { MainPizzaComponent } from './pages/main-pizza/main-pizza.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { APP_BASE_HREF } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PayComponent,
    MainPizzaComponent,
    OrdersComponent,
    AddressesComponent,
    
  ],
  imports: [
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
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
