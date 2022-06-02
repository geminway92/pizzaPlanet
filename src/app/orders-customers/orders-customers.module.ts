import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersCustomersRoutingModule } from './orders-customers-routing.module';
import { OrdersCustomersComponent } from './orders-customers.component';
import { FilterSelectModule } from '../filter-select/filter-select.module';
import { BaseTableModule } from '../base-table/base-table.module';


@NgModule({
  declarations: [
    OrdersCustomersComponent
  ],
  imports: [
    CommonModule,
    OrdersCustomersRoutingModule,
    FilterSelectModule,
    BaseTableModule
  ],
  exports: [
    OrdersCustomersComponent
  ]
})
export class OrdersCustomersModule { }
