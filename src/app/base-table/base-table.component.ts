import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../interfaces/employees';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataSource.forEach( employee => {
      delete employee.id
      delete employee.tel
    })

    this.columns =  Object.keys(this.dataSource[0])
  
    
  }



  columns: string[] = [];
  @Input() dataSource: Employees[] = []

}
