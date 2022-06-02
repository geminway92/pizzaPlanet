import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersCustomersComponent } from './orders-customers.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersCustomersRoutingModule { }
