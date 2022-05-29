import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCategoryRoutingModule } from './main-category-routing.module';
import { MainCategoryComponent } from './main-category.component';


@NgModule({
  declarations: [
    MainCategoryComponent
  ],
  imports: [
    CommonModule,
    MainCategoryRoutingModule
  ]
})
export class MainCategoryModule { }
