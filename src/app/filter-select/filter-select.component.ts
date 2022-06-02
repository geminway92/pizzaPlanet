import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  employees = new FormControl();

  constructor() { }
  value: string = 'Buscar'

  employeeList: string[] = ['Admin', 'Empleado', 'Repartidor'];


  ngOnInit(): void {
  }
  checkForm(){
    console.log(this.employees.value)
  }

}
