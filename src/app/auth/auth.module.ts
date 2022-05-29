import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    ForgotPasswordComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DialogContentComponent,
    AuthComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ FormBuilder, ToastrService],
})
export class AuthModule { }
