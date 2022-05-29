import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderScrollComponent } from '../slider-scroll/slider-scroll.component';


@NgModule({
  declarations: [
    SliderScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderScrollComponent
  ]
})
export class SliderScrollModule { }
