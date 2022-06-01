import { AfterViewInit, Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor( 
    private usersService: UsersService,
    private router: Router
  ){
    this.currentRole = localStorage.getItem('role')
  }

  title = 'pizzaPlanet';
  currentUser: Object | null =  localStorage.getItem('token');
  currentRole: String | null = '';


  ngOnInit(): void {
    this.usersService.checkStateAuth()
    this.goRouteEmployeed()
  }

  goRouteEmployeed(){
    if(this.currentRole === 'employee' || this.currentRole === 'admin'){
      this.router.navigate(['dashboard'])
    }
  }

  get currentEmailLogin(){
    return this.usersService.currentUser
  }

}
