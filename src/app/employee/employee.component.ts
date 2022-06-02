import { Component, OnInit } from '@angular/core';
import { Employees } from '../interfaces/employees';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-empleyee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( ) { }
  employeeList: Employees[] = [];
  employeeFiltered: Employees[] = []
  ngOnInit(): void {
    

  this.employeeList = [{name: 'Ana', lastname: 'Benitez Dominguez', role: 'admin', email: 'ana@test.com'},
  {name: 'Diego', lastname: 'Martín Dominguez', role: 'employee', email: 'diego@test.com'},
  {name: 'Marta', lastname: 'Sanchez Dominguez', role: 'admin', email: 'marta@test.com'},
  {name: 'Marcos', lastname: 'Sanchez Dominguez', role: 'employee', email: 'marcos@test.com'},
  {name: 'Alicia', lastname: 'Dominguez Ruiz', role: 'admin', email: 'alicia@test.com'},
  {name: 'Román', lastname: 'Chaves Dominguez', role: 'employee', email: 'roma@test.com'},
  {name: 'Pedro', lastname: 'Martinez Ruiz', role: 'admin', email: 'pedro@test.com'},
  {name: 'Amanda', lastname: 'Sanchez Almendro', role: 'employee', email: 'amanda@test.com'},
  {name: 'Luis', lastname: 'Martinez Ruiz', role: 'employee', email: 'luis@test.com'},
  {name: 'Neon', lastname: 'Martinez Sanchez', role: 'employee', email: 'neon@test.com'}]

  this.employeeFiltered = [...this.employeeList]
}


    

  filterEmployees(e: FormGroup) {
    
    const selectRole = e.controls['valueSelect'].value
    const valueFilter = e.controls['valueFilter'].value.toLowerCase()
    
    this.employeeFiltered = this.employeeList.filter( employee =>  
        employee.name.toLowerCase().includes(valueFilter)  
      || employee.lastname.toLowerCase().includes(valueFilter)
      || employee.email.toLowerCase().includes(valueFilter))
    .filter(e => e.role.includes(selectRole))

  }
 

}