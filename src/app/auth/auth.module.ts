import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';







@NgModule({
  declarations: [
    MainComponent,
    ForgotPasswordComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DialogContentComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
