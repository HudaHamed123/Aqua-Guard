import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  sections = [
    { name: 'الرئيسية', icon: 'fa-regular fa-house', route: '/home' },
    { name: 'نحن', icon: 'fa-regular fa-user', route: '/about' },
    { name: 'خدماتنا', icon: 'fa-solid fa-circle-nodes', route: '/services' },
    { name: 'مشروعنا', icon: 'fa-regular fa-lightbulb', route: '/projects' },
    { name: 'اتصل بينا', icon: 'fa-regular fa-envelope', route: '/contacts' },
  ];

  socials = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/AQUAGUARD90', color: '#00eeff' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/aquaguardcontracting?igsh=NmhnYXh5Z3F1bWth', color: '#AE1B21' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201008293713', color: '#25D366' },
          { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/ahmed-hassan-64b2413a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#00eeff' },
        { icon: 'fa-tiktok', url: 'https://www.tiktok.com/@aqua.guard.contra', color: '#000000' }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

