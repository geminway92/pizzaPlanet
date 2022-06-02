import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BaseTableComponent
  ]
})
export class BaseTableModule { }
