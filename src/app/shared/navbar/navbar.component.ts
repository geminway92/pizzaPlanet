import { Component,OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private usersService: UsersService,  private router: Router  ) { }

  ngOnInit(): void {
    console.log(this.usersService.checkAuth())
  }

  onClick(){
    this.usersService.logout()
      .then( () => {
        this.router.navigate(['carta'])
      })
      .catch(error => console.log(error))
  }
  
}
