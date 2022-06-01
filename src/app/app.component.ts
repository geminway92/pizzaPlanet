import { AfterViewInit, Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor( 
    private usersService: UsersService,
    private router: Router
  ){}

  title = 'pizzaPlanet';
  currentUser: Object | null =  localStorage.getItem('token');
  isEmployeed: boolean = true ;

  ngOnInit(): void {
    this.usersService.checkStateAuth()
    this.goRouteEmployeed()
  }

  goRouteEmployeed(){
    if(this.isEmployeed){
      this.router.navigate(['dashboard'])
    }
  }

  get currentEmailLogin(){
    return this.usersService.currentUser
  }

}
