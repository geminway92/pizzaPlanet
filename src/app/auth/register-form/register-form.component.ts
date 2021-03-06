import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { DialogContentComponent } from '../components/dialog-content/dialog-content.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passwordPattern: string = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
  paramsModal = {
    position: "top-center",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  }
  indeterminate: boolean = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled: boolean = false;
  hide = true;
  currentName: string = '';


  myForm: FormGroup = this.fb.group({
    'name': ['', Validators.required],
    'surname': ['', [ Validators.required]],
    'email': ['', [ Validators.required, Validators.pattern( this.emailPattern )]],
    'password': ['', [ Validators.required, Validators.minLength(8) ]],
    'tel': ['', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ]],
    'privacityChecked': [ false, [ Validators.requiredTrue ]]
  })

  constructor(
    public dialog: MatDialog, 
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private toatstr: ToastrService
  ) {}
  

  // Events 
  
  getErrorMessage(  ) {
    if (this.myForm.controls['email'].hasError('required') ) {
      return `Debes introducir un correo`;
    } else {
      return this.myForm.controls['email'] ? 'Correo no v??lido' : '';

    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  
  // TODO hacer que cree unos datos para saber si es admin o no
  async onSubmit(){
    this.myForm.value.role = 'customer' 
    const { email, password, name } = this.myForm.value
    await this.userService.addUser(this.myForm.value);
    await this.userService.register( email, password, name )
      .then( resp => {
        this.toatstr.success(`Registro exitoso ${ this.myForm.controls['name'].value}`)
        this.router.navigate(['/pay'])
        
      })
      .catch(error => {
        console.log(error)
        this.toatstr.error('No se ha podido realizar el registro')
      })
    
  }


}



