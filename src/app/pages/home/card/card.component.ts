import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Feature } from '../../../shared/interfaces/feature/feature';
import gsap from 'gsap';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
feature: Feature[] = [
    {
      icon: 'fa-solid fa-check-to-slot',
      title: 'الجودة',
      desc: 'أعمالنا ذات جودة عالية في التنفيذ وقطع الغيار والمنتجات'
    },
    {
      icon: 'fa-regular fa-gem',
      title: 'الإتقان',
      desc: 'ننفذ المشروعات والأعمال بإتقان كبير واحترافية عالية'
    },
    {
      icon: 'fa-regular fa-handshake',
      title: 'الخبرة',
      desc: 'خبرة في مجال حمامات السباحة ونعمل مع شركاء نجاح متميزين'
    }
  ];
  

}
