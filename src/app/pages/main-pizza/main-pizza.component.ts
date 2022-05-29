import { Component, OnInit } from '@angular/core';
import CategoryFood from 'src/app/interfaces/categoryFood.interface';
import dataJSON from '../../../assets/json/dataPizza.json';

@Component({
  selector: 'app-main-pizza',
  templateUrl: './main-pizza.component.html',
  styleUrls: ['./main-pizza.component.scss']
})
export class MainPizzaComponent implements OnInit {
  dataJSONCategory: CategoryFood[] = dataJSON;

  constructor() { }

  ngOnInit(): void {
  
  }

}
