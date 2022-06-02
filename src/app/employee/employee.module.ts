import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { BaseTableModule } from '../base-table/base-table.module';
import { FilterSelectModule } from '../filter-select/filter-select.module';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    BaseTableModule,
    FilterSelectModule
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
