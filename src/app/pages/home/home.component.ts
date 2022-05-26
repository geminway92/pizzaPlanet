import { Component, OnInit } from '@angular/core';

interface CardsLanding {
  srcImg: string,
  nameText: string,
  alt: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsLanding: CardsLanding[] = [
    { srcImg: '../../../assets/img/Pizza-on-wooden-board.jpg', nameText: '¿Aún no has probado nuestras pizzas? ¡Pruébalas!', alt: 'Link carta'},
    { srcImg: '../../../assets/img/deliveryMan.jpg', nameText: '¡Pide para llevar!', alt: 'Link pedir pizza'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
