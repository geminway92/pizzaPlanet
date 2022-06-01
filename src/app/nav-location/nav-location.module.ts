import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLocationComponent } from './nav-location.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavLocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavLocationComponent
  ]
})
export class NavLocationModule { }
