import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ReuseComponent } from '../../shared/components/reuse/reuse.component';


register();

@Component({
  selector: 'app-services',
 imports: [ ReuseComponent],

  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    activeTab: string = 'services';

  setTab(tab: string) {
    this.activeTab = tab;
  }


 


  tabs = [
    { key: 'services', label: 'حمامات خاصة' },
    { key: 'about', label: 'حمامات عامة' },
    { key: 'statistics', label: 'شلالات ولألعاب المائية' }
  ];


  publicBaths: string[] = [
    'assets/12.JPG',
    '/assets/3N.jpg',
    'assets/6X.JPG',
    '/assets/17F.jpg',
     'assets/2N.JPG',
     '/assets/18L.jpg'
  ];

  privateBaths: string[] = [
      '/assets/10M.JPG',
  '/assets/5D.JPG',
  'assets/7L.JPG',
  '/assets/8I.jpg',
  '/assets/9I.jpg',
  'assets/Untitled design.jpg',
  '/assets/14D.jpg',
  '/assets/16I.jpg',
  '/assets/19d.jpg',
  '/assets/1513.jpg',
  '/assets/15F.jpg',
   '/assets/12C.JPG'
  ];

  spaClubs: string[] = [
      '/assets/2023.JPG',
      'assets/photo_2026-01-06_17-26-46.jpg',
              'assets/photo_2026-01-06_17-26-49.jpg',
                'assets/photo_2026-01-06_17-26-54.jpg',
                  'assets/photo_2026-01-06_17-26-58.jpg',
  'assets/photo_2026-01-06_17-26-13.jpg',
    'assets/photo_2026-01-06_17-26-24.jpg',
      'assets/photo_2026-01-06_17-26-35.jpg',
        'assets/photo_2026-01-06_17-26-39.jpg',
          'assets/photo_2026-01-06_17-26-42.jpg',
          
  ];

  
  getTabImages(tab: string): string[] {
    switch(tab) {
      case 'services': return this.privateBaths;
      case 'about': return this.publicBaths;
      case 'statistics': return this.spaClubs;
      default: return [];
    }
  }
  // waterGames: string[] = [
  //  '/assets/2023.JPG',
    
  // ];
 
}




