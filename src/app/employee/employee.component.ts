import { Component, OnInit } from '@angular/core';
import { Employees } from '../interfaces/employees';


const ELEMENT_DATA: Employees[] = [
  {name: 'Ana', usernames: 'Benitez Dominguez', role: 'employee', email: 'ana@test.com'},
  {name: 'Diego', usernames: 'Martín Dominguez', role: 'employee', email: 'diego@test.com'},
  {name: 'Marta', usernames: 'Sanchez Dominguez', role: 'employee', email: 'marta@test.com'},
  {name: 'Marcos', usernames: 'Sanchez Dominguez', role: 'employee', email: 'marcos@test.com'},
  {name: 'Alicia', usernames: 'Dominguez Ruiz', role: 'employee', email: 'alicia@test.com'},
  {name: 'Román', usernames: 'Chaves Dominguez', role: 'employee', email: 'roma@test.com'},
  {name: 'Pedro', usernames: 'Martinez Ruiz', role: 'employee', email: 'pedro@test.com'},
  {name: 'Amanda', usernames: 'Sanchez Almendro', role: 'employee', email: 'amanda@test.com'},
  {name: 'Luis', usernames: 'Martinez Ruiz', role: 'employee', email: 'luis@test.com'},
  {name: 'Neon', usernames: 'Martinez Sanchez', role: 'employee', email: 'neon@test.com'},
];

@Component({
  selector: 'app-empleyee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'surname', 'role', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

 

}