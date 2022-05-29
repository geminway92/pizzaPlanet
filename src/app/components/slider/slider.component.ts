import { Component, OnInit } from '@angular/core';

interface SlidersImage {
  srcImg: string,
  alt: string,
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  cardsLanding: SlidersImage[] = [
    { srcImg: 'assets/img/offersPizza2Median.png', alt: 'Oferta. Pizza 2 x 1'},
    { srcImg: 'assets/img/offertePizza2Barbecue.gif',  alt: 'Oferta 2 x 1'},
    { srcImg: 'assets/img/offers-gift-entry.png',  alt: 'Regalo entrante con la compra de menu'},
  ]
  tagImg: NodeListOf<Element> = document.querySelectorAll('#carouselSpecialties .carousel-item');;
  tagIndicator: NodeListOf<Element> = document.querySelectorAll('#carouselSpecialties .indicator');;
  positionCurrent: number = 0;
  constructor() { }


  nextSlider(){
      console.log(this.tagIndicator, this.tagImg, 'mira lo que viene')
    this.tagImg[this.positionCurrent].classList.remove('active');
    this.tagIndicator[this.positionCurrent].classList.remove('active');
    
    if (this.positionCurrent >= this.tagImg.length - 1) {
      this.positionCurrent = 0
    } else {
      this.positionCurrent++
    }
    
    this.tagImg[this.positionCurrent].classList.toggle('active');
    this.tagIndicator[this.positionCurrent].classList.toggle('active');
    console.log(this.tagImg)
    console.log(this.tagIndicator)
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
    console.log(this.tagImg)
  }

}
