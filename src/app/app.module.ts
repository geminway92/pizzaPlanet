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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AddressesModule } from './addresses/addresses.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavLocationModule } from './nav-location/nav-location.module';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    HomeModule,
    AuthModule,
    DashboardRoutingModule,
    NavLocationModule,
    SidebarModule,
    AddressesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
