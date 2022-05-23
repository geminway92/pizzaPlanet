import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({
    email: ['',[ Validators.required, Validators.email, Validators.pattern( this.emailPattern) ]],
    password: ['', [Validators.required ] ],
  })
  
  hide = true;
  
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.myForm.controls['email'].hasError('required')) {
      return 'Debes introducir un correo';
    } else {
      return this.myForm.controls['email'] ? 'Correo no válido' : '';

    }

  }

  sendForm(){
    console.log(this.myForm.value)
  }

}
