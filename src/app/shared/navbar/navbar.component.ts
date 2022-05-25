import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

interface Routes {
  path: string,
  nameRoute: string,
  icon: string    
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private usersService: UsersService,  private router: Router  ) { }

  emailCurrent: string | null = this.usersService.currentUser ;
  nameCurrent: string | null = this.usersService.currentNameUser;
  routes: Routes[] = [
    { path: 'home', nameRoute: 'Inicio' , icon: 'home'},
    { path: 'main-pizza', nameRoute: 'Carta', icon: 'restaurant_menu'},
  ]
  

  ngOnInit(): void {
    this.emailCurrent = localStorage.getItem('token')
    this.usersService.checkStateAuth()
  }

  onClick( events:string ){
    if(events === 'logout' ){
      
      this.usersService.logout()
      .then( () => {
        this.emailCurrent = null
        this.router.navigate(['home'])
        
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  }

  get currentEmail(){
    return this.usersService.currentUser
  }

  get currentName(){
    return this.usersService.currentNameUser 
  }

  
}
