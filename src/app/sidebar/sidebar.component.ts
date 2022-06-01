import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( 
    private userService: UsersService, 
    private router: Router
  ) { }
  buttonSelect: string = 'dashboard';
  ngOnInit(): void {
  }

  goRoute( selector: string){
    this.buttonSelect = selector;
    this.router.navigate([selector])
  }

  logout(){
    localStorage.removeItem('role')
    this.userService.logout();
  }
}
