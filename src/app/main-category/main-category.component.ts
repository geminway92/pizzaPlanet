import { Component, OnInit } from '@angular/core';
import dataJSON from '../../assets/json/dataPizza.json';
import CategoryFood from '../interfaces/categoryFood.interface';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss']
})
export class MainCategoryComponent implements OnInit {

  dataJSONCategory: CategoryFood[] = dataJSON;
  constructor() { }

  ngOnInit(): void {
  }

}
