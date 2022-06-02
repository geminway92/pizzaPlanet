import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.scss']
})
export class LoginEmployeeComponent implements OnInit {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passwordPattern: string = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
  myForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'lastname': ['', [ Validators.required]],
    'email': ['', [ Validators.required, Validators.pattern( this.emailPattern )]],
    'tel': ['', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ]],
    'checkboxAdmin': [ false]
  })

  constructor( private fb: FormBuilder, private userService: UsersService, private toatstr: ToastrService ) { }

  @Output() displayFormEmployee: EventEmitter<boolean> = new EventEmitter();
  
  ngOnInit(): void {}

  getErrorMessage(  ) {
    if (this.myForm.controls['email'].hasError('required') ) {
      return `Debes introducir un correo`;
    } else {
      return this.myForm.controls['email'] ? 'Correo no válido' : '';

    }

  }

  async onSubmit(){
    const { email, name, lastname, tel, checkboxAdmin } = this.myForm.value

    const role = checkboxAdmin ? 'admin' : 'employee'
    
    let newFormDate = { name, lastname, email, tel, role  }
    

    await this.userService.addEmployee(newFormDate)
      .then( resp => {
        this.toatstr.success(`Registro exitoso ${ this.myForm.controls['name'].value}`)
        this.myForm.reset()
        this.displayFormEmployee.emit(false)
      })
      .catch(error => {
        console.log(error)
        this.toatstr.error('No se ha podido realizar el registro')
      })
    
  }

}
