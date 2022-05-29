import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore, } from '@angular/fire/firestore';
import { UsersService } from '../../services/users.service';
import { environment } from '../../../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthRoutingModule } from '../auth-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      providers: [ 
        UsersService, 
        ToastrService, 
      ],
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        AuthRoutingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
        
      
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
