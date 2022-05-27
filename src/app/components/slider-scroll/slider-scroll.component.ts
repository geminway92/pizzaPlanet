import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';


interface SlidersImage {
  srcImg: string,
  alt: string,
}

@Component({
  selector: 'app-slider-scroll',
  templateUrl: './slider-scroll.component.html',
  styleUrls: ['./slider-scroll.component.scss']
})
export class SliderScrollComponent implements OnInit {
  
  @Input() imgArray: SlidersImage[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
