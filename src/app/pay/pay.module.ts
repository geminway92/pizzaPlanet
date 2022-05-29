import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayComponent } from '../pay/pay.component';
import { MaterialModule } from '../material/material.module';
import { PayRoutingModule } from './pay-routing.module';


@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    MaterialModule
  ]
})
export class PayModule { }
