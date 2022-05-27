import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';


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
  imgSliderArray: SlidersImage[] = [
    { srcImg: 'assets/img/PizzaHawaiana.png', alt: 'Pizza Hawaina Crispy'},
    { srcImg: 'assets/img/PizzaParmesanaCarbonara.png', alt: 'Pizza Parmesana Carbonara'},
    { srcImg: 'assets/img/PizzaTexasBBQCrispy.png', alt: 'Pizza Cremosa Barbacoa'},
    { srcImg: 'assets/img/PizzaBuffaloChicken.png', alt: 'Pizza Buffalo'},
    { srcImg: 'assets/img/PizzaCremozzaBourbon.png', alt: 'Pizza Bourbon'},
  ]
  imgSliderArray2: SlidersImage[] = [
    { srcImg: 'assets/img/PizzaPecadoCarnal.png', alt: 'Pizza Pecado Carnal'},
    { srcImg: 'assets/img/PizzaCarbonara.png', alt: 'Pizza Carbonara'},
    { srcImg: 'assets/img/PizzaExtravaganzza.png', alt: 'Pizza Extravanzza'},
    { srcImg: 'assets/img/PizzaBarbacoa.png', alt: 'Pizza Buffalo'},
    { srcImg: 'assets/img/PizzaHawaianaPlus.png', alt: 'Pizza Hawaina Plus'},
    { srcImg: 'assets/img/PizzaPolloParrilla.png', alt: 'Pizza Pollo Parrilla'},
    { srcImg: 'assets/img/PizzaCuatroQuesos.png', alt: 'Pizza Cuatro Quesos'},
    { srcImg: 'assets/img/PizzaTonyPepperoni.png', alt: 'Pizza Tony Pepperoni'},
    { srcImg: 'assets/img/PizzaPatanegra.png', alt: 'Pizza PataNegra'},
    { srcImg: 'assets/img/PizzaCampiña.jpg', alt: 'Pizza Campiña'},
  ]
  imgSliderArray3: SlidersImage[] = [
    { srcImg: 'assets/img/PizzaMargarita.png', alt: 'Pizza Margarita'},
    { srcImg: 'assets/img/PizzaPorMitades.png', alt: 'Elige por mitades'},
  ]

  constructor() { }


  ngOnInit(): void {
    this.tagImg = document.querySelectorAll('#carouselOffers .carousel-item');
    this.tagIndicator = document.querySelectorAll('#carouselOffers .indicator');
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
