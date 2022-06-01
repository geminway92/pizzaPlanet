import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
