import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Users from 'src/app/interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
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

  ngOnInit(): void {
    this.usersService.getUser().subscribe(users => {
      console.log(users)
      this.users = users
    })
  }

  getErrorMessage() {
    if (this.myForm.controls['email'].hasError('required')) {
      return 'Debes introducir un correo';
    } else {
      return this.myForm.controls['email'] ? 'Correo no válido' : '';

    }

  }

  onSubtmit(){
    console.log(this.myForm.value)
    this.usersService.login(this.myForm.value)
      .then( resp => {
        console.log(resp.user.getIdToken())
        this.router.navigate(['/carta'])


      })
      .catch( error => {
        //TODO Alerta
        console.log(error)
        this.toastr.error('No se ha podido iniciar sesión', 'Error')
      })
    
  }

}
