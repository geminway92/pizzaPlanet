import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOrderComponent } from '../card-order/card-order.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardOrderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardOrderComponent
  ]
})
export class CardOrderModule { }
