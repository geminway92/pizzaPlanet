import { Component, OnInit } from '@angular/core';

interface SlidersImage {
  srcImg: string,
  alt: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsLanding: SlidersImage[] = [
    { srcImg: 'assets/img/offersPizza2Median.png', alt: 'Oferta. Pizza 2 x 1'},
    { srcImg: 'assets/img/offertePizza2Barbecue.gif',  alt: 'Oferta 2 x 1'},
    { srcImg: 'assets/img/offers-gift-entry.png',  alt: 'Regalo entrante con la compra de menu'},
  ]
  tagImg: any = null
  tagIndicator: any = null
  positionCurrent: number = 0;
  constructor() { }


  ngOnInit(): void {
    this.tagImg = document.querySelectorAll('.carousel-item');
    this.tagIndicator = document.querySelectorAll('.indicator');
    
  }

  nextSlider(){

    this.tagImg[this.positionCurrent].classList.remove('active');
    this.tagIndicator[this.positionCurrent].classList.remove('active');
    
    if (this.positionCurrent >= this.tagImg.length - 1) {
      this.positionCurrent = 0
    } else {
      this.positionCurrent++
    }
    
    this.tagImg[this.positionCurrent].classList.toggle('active');
    this.tagIndicator[this.positionCurrent].classList.toggle('active');
    
  }

  backSlider() {

    this.tagImg[this.positionCurrent].classList.remove('active');
    this.tagIndicator[this.positionCurrent].classList.remove('active');

    if (this.positionCurrent <= 0) {
      this.positionCurrent = this.tagImg.length - 1
    } else {
      this.positionCurrent--
    }

    this.tagImg[this.positionCurrent].classList.toggle('active');
    this.tagIndicator[this.positionCurrent].classList.toggle('active');
  
  }

  selectImgSlider( positionImg: number ){
    console.log( this.tagIndicator)
    this.tagImg[this.positionCurrent].classList.remove('active');
    this.tagIndicator[ this.positionCurrent ].classList.remove('active');

    this.tagImg[ positionImg ].classList.toggle('active')
    this.tagIndicator[ positionImg ].classList.toggle('active')
    this.positionCurrent = positionImg;
  }

  

}
