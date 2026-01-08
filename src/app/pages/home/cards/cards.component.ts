import { Component, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
   
  features = [
    {
      title: 'الصيانة',
      desc: ' التشغيل والصيانة وخدمة ما بعد مرحلة الانشاء',
      icon: 'fa-solid fa-screwdriver-wrench',
      color: '#0ea5e9'
    },
 
    {
      title: 'المواد',
      desc: 'أفضل المواد العالمية للألعاب المائية.',
      icon: 'fa-solid fa-thumbs-up',
      color: '#22c55e'
    },
       {
      title: 'التصميم',
      desc: 'تصميمات إبداعية تناسب أفضل شكل.',
      icon: 'fa-solid fa-pen-ruler',
      color: '#38bdf8'
    },
    {
      title: 'الخبرة',
      desc: 'خبرة طويلة في مجال حمامات السباحة.',
      icon: 'fa-solid fa-layer-group',
      color: '#f97316'
    }
  ];


  
}
