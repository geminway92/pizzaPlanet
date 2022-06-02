import { Component, OnInit } from '@angular/core';
import { Employees } from '../interfaces/employees';

@Component({
  selector: 'app-orders-customers',
  templateUrl: './orders-customers.component.html',
  styleUrls: ['./orders-customers.component.scss']
})
export class OrdersCustomersComponent implements OnInit {

  constructor() { }
  employeeList: Employees[] = []
  ngOnInit(): void {
  }

}
