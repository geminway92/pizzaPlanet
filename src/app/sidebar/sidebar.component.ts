import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  buttonSelect: string = 'home';
  ngOnInit(): void {
  }

  activeButton( selector: string){
    this.buttonSelect = selector;
  }
}
