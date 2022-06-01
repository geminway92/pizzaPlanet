import { Component, Input, OnInit } from '@angular/core';
import { CardOrders } from '../interfaces/card-ordes';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit {

  constructor() { 

  }

 @Input() cardData: CardOrders = { nameProcess: '', color: '', orders: []};

  ngOnInit(): void {
  }

}
