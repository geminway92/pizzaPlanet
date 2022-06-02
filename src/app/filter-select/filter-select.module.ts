import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSelectComponent } from './filter-select.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FilterSelectComponent
  ]
})
export class FilterSelectModule { }
