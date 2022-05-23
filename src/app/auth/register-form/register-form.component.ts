import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../components/dialog-content/dialog-content.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passwordPattern: string = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"

  myForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'surname': ['', [ Validators.required]],
    'email': ['', [ Validators.required, Validators.pattern( this.emailPattern )]],
    'password': ['', [ Validators.required, Validators.minLength(8) ]],
    'tel': ['', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ]],
    'privacityChecked': [ false, [ Validators.requiredTrue ]]

  })
  
  indeterminate: boolean = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled: boolean = false;
  hide = true;

  constructor(
    public dialog: MatDialog, 
    private fb: FormBuilder
  ) {}
  

  // Events 
  
  getErrorMessage(  ) {
    if (this.myForm.controls['email'].hasError('required') ) {
      return `Debes introducir un correo`;
    } else {
      return this.myForm.controls['email'] ? 'Correo no válido' : '';

    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  
  registerForm(){
    console.log(this.myForm.value)
  }


}


