import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [ ]
})
export class OrdersComponent implements OnInit {

  constructor( 
    private usersService: UsersService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  checkUserLogin(){
    return this.usersService.checkAuth()
  }
  
  goRoute(){
    const userUiD = this.usersService.checkAuth()

    if( userUiD ){
      return this.router.navigate(['/addresses'])
    }else {
      return this.router.navigate(['/login'])
    }

  }

}
