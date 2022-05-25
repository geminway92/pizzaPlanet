import { Component, OnInit, Output, Input } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private usersService: UsersService,  private router: Router  ) { }

  emailCurrent: string | null = this.usersService.currentUser ;

  ngOnInit(): void {
    this.emailCurrent = localStorage.getItem('token')
    this.usersService.checkStateAuth()
  }

  onClick( events:string ){
    if(events === 'logout' ){
      
      this.usersService.logout()
      .then( () => {
        this.emailCurrent = null
        this.router.navigate(['carta'])
        
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  }

  get currentEmail(){
    return this.usersService.currentUser
  }

  
}
