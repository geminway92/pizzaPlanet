import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { MatDialogModule } from '@angular/material/dialog';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports:[
        MatDialogModule,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        RouterTestingModule,
        ToastrModule.forRoot(),
        MatFormFieldModule,
        MatIconModule
      ],
      providers: [
        FormBuilder,
        UsersService,
        ToastrService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
