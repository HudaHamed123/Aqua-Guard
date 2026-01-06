import { Component } from '@angular/core';
import { AccordionItem } from '../../shared/interfaces/accordionItem/accordion-item';
import { ReuseComponent } from "../../shared/components/reuse/reuse.component";

@Component({
  selector: 'app-about',
  imports: [ReuseComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
title:string='اكوا جارد هي '

 aboutSection = {
    title: 'من هي أكوا جارد',
    paragraphs: [
      'تعتبر شركة افريقيا احدى الشركات الرائدة فى مجال حمامات السباحة والجاكوزى والشلالات والنافورات واللاندسكيب، .',
      'كما يوجد قسم متخصص لإصلاح حمامات السباحة التى بها عيوب أو تسريب فى أى مرحلة من مراحل إنشائها، بالإضافة إلى قسم صيانة متكامل بأجود الخامات المستوردة.',
      'وتقوم الشركة ببيع الكيماويات والمعدات بمختلف أنواعها، وتعتبر الخبرة والأمانة أساس العمل فى هذا المجال.',
      'كما تقدم الشركة ضمان ضد التسريب لمدة 15 عام وضمان على المعدات لمدة 2 سنة.',
      'وتقوم الشركة بتصميم وتنفيذ جميع أنواع حمامات السباحة (سكيمر – أوفر فلو – إنفينيتي – هيرزون) بجميع الأحجام والمقاسات.'
    ]
  };
accordionItems: AccordionItem[] = [
  {
    title: 'شلالات ولاند سكيب',
    content: ' خبرة ستصل بنا الى تحقيق كل ما يتمناه العميل...',
    open: false
  },
  {
    title: 'حمامات السباحة',
    content: 'تصميم وتنفيذ جميع انواع حمامات السباحة...',
    open: false
  },
  {
    title: 'صيانة بيع المعدات',
    content: 'نوفر جميع معدات حمامات السباحة بأعلى جودة...',
    open: false
  },
  {
    title: 'إصلاح حمامات السباحة',
    content: 'إصلاح جميع مشاكل التسريب والتشققات...',
    open: false
  }
];
toggleItem(index: number) {
  this.accordionItems[index].open =
    !this.accordionItems[index].open;
}
}
