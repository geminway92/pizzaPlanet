import { Component, OnInit } from '@angular/core';
import dataJSON from '../../../assets/json/dataPizza.json';

@Component({
  selector: 'app-main-pizza',
  templateUrl: './main-pizza.component.html',
  styleUrls: ['./main-pizza.component.scss']
})
export class MainPizzaComponent implements OnInit {
  dataJSONCategory: any = dataJSON;

  constructor() { }

  ngOnInit(): void {
  
  }

}
