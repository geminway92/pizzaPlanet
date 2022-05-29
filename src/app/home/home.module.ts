import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from '../slider/slider.component';
import { SliderScrollComponent } from '../slider-scroll/slider-scroll.component';
import { SliderModule } from '../slider/slider.module';
import { SliderScrollModule } from '../slider-scroll/slider-scroll.module';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SliderModule,
    SliderScrollModule
   
  ],
  exports:[
  ]
})
export class HomeModule { }


