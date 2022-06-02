import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEmployeeComponent } from './login-employee.component';
import { MaterialModule } from '../material/material.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginEmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginEmployeeComponent
  ],
  providers: [ToastrService]
})
export class LoginEmployeeModule { }
