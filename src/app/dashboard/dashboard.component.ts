import { Component, OnInit } from '@angular/core';
import { CardOrders } from '../interfaces/card-ordes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  cardOrdes: CardOrders[] = [
    {nameProcess: 'En Cola', color: '#ffffff', orders: [{state:'queued', orderNumber: 1, customerName: 'Gema', order: 'Patata asada'}, {state:'queued', orderNumber: 6, customerName: 'Gema', order: 'Patata asada'}, {state:'queued', orderNumber: 7, customerName: 'Gema', order: 'Patata asada'}, {state:'queued', orderNumber: 8, customerName: 'Gema', order: 'Patata asada'}, {state:'queued', orderNumber: 9, customerName: 'Gema', order: 'Patata asada'}, {state:'queued', orderNumber: 10, customerName: 'Gema', order: 'Patata asada'}]},
    {nameProcess: 'En Proceso', color: '#e8e6e6', orders: [{state:'inProcess', orderNumber: 2, customerName: 'Fran', order: 'Pizza americada'}]},
    {nameProcess: 'En Reparto', color: '#f5d1a7', orders: [{state:'inDistribution', orderNumber: 3, customerName: 'Carlos', order: 'Campero de pollo'}]},
    {nameProcess: 'Entregado', color: '#b7f7dc', orders: [{state:'delivered', orderNumber: 4, customerName: 'Paca', order: 'Patatas a lo pobre'}]},
    {nameProcess: 'Cancelado', color: '#fc8484', orders: [{state:'canceled', orderNumber: 5, customerName: 'Ana', order: 'Pizza margarita'}]}
  ]

  
  ngOnInit(): void {
  }

}
