import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from '../material/material.module';
import { CardOrderModule } from '../card-order/card-order.module';
import { EmployeeModule } from '../employee/employee.module';




@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EmployeeModule,
    CardOrderModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
