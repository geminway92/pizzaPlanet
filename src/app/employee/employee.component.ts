import { Component, OnInit } from '@angular/core';
import { Employees } from '../interfaces/employees';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-empleyee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private usersService: UsersService ) { 
    this.usersService.getEmployee().subscribe( employee => {
      
      this.employeeList = employee;
      this.employeeFiltered = [...this.employeeList]  
    })
  }
  employeeList: Employees[] = [];
  employeeFiltered: Employees[] = []
  isDisplayForm: boolean = false;
  
  ngOnInit(): void {}


    

  filterEmployees(e: FormGroup) {
    
    const selectRole = e.controls['valueSelect'].value
    const valueFilter = e.controls['valueFilter'].value.toLowerCase()
    
    this.employeeFiltered = this.employeeList.filter( employee =>  
        employee.name.toLowerCase().includes(valueFilter)  
      || employee.lastname.toLowerCase().includes(valueFilter)
      || employee.email.toLowerCase().includes(valueFilter))
    .filter(e => e.role.includes(selectRole))

  }

  displayFormEmployee(){
    
  }
 

}