import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersCustomersRoutingModule } from './orders-customers-routing.module';
import { OrdersCustomersComponent } from './orders-customers.component';
import { FilterSelectModule } from '../filter-select/filter-select.module';


@NgModule({
  declarations: [
    OrdersCustomersComponent
  ],
  imports: [
    CommonModule,
    OrdersCustomersRoutingModule,
    FilterSelectModule
  ],
  exports: [
    OrdersCustomersComponent
  ]
})
export class OrdersCustomersModule { }
