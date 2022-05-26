import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Users from 'src/app/interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [FormBuilder]
})
export class LoginFormComponent implements OnInit {
  
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  users: Users[] = [];
  myForm: FormGroup = this.fb.group({
    email: ['',[ Validators.required, Validators.pattern( this.emailPattern) ]],
    password: ['', [Validators.required ] ],
  })
  
  hide = true;
  
  constructor( private fb: FormBuilder, private usersService: UsersService, private router: Router, private toastr: ToastrService  ) { }
  
  emailCurrent: string | null = '' ;
  
  get currentEmail(){
    return this.emailCurrent
  }
  
  ngOnInit(): void {
    this.emailCurrent = localStorage.getItem('token')
    this.usersService.checkStateAuth()
  }

  getErrorMessage() {
    if (this.myForm.controls['email'].hasError('required')) {
      return 'Debes introducir un correo';
    } else {
      return this.myForm.controls['email'] ? 'Correo no válido' : '';

    }

  }

  onSubtmit(){
    this.usersService.login(this.myForm.value)
      .then( resp => {
        this.emailCurrent = resp.user.email
        this.router.navigate(['/main-pizza'])
      })
      .catch( error => {
        this.toastr.error('No se ha podido iniciar sesión', 'Error')
      })
    
  }

  

}
