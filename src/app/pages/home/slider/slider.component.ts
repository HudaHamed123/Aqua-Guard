import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  images: string[] = [
    'assets/10.JPG',
    'assets/12.JPG',
    'assets/14A.jpg',
    'assets/14F.jpg',
    'assets/14H.jpg',
    'assets/10K.JPG',
    'assets/2023.JPG',
    'assets/9G.jpg'
   
  ];
  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 8 },
    640: { slidesPerView: 1, spaceBetween: 12 },
    1024: { slidesPerView: 4, spaceBetween: 26 }
  };
  
}
