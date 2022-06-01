import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private userService: UsersService ) { }
  buttonSelect: string = 'home';
  ngOnInit(): void {
  }

  activeButton( selector: string){
    this.buttonSelect = selector;
  }

  logout(){
    localStorage.removeItem('role')
    this.userService.logout();
  }
}
