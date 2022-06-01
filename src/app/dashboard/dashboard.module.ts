import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from '../material/material.module';
import { CardOrderModule } from '../card-order/card-order.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardOrderModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
