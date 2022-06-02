import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../material/material.module';
import { BaseTableModule } from '../base-table/base-table.module';
import { FilterSelectModule } from '../filter-select/filter-select.module';
import { LoginEmployeeModule } from '../login-employee/login-employee.module';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    BaseTableModule,
    FilterSelectModule,
    LoginEmployeeModule

  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
