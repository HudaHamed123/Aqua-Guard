import { Component } from '@angular/core';
import { ReuseComponent } from "../../shared/components/reuse/reuse.component";

@Component({
  selector: 'app-contacts',
  imports: [ReuseComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  title:string='تواصل معنا';
isloading:boolean=false

  contacts:any[] = [
    { icon: 'fa-solid fa-envelope-circle-check', email: 'Aqua guard@gmail.com' },
    { icon: 'fa-solid fa-square-phone', phone: '01008293713' },
    { icon: 'fa-solid fa-location-dot', location: 'مطروح, كيلو 2' }
  ];

  socials = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/AQUAGUARD90', color: '#00eeff' },
        { icon: 'fa-tiktok', url: 'https://www.tiktok.com/@aqua.guard.contra', color: '#000000' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/aquaguardcontracting?igsh=NmhnYXh5Z3F1bWth', color: '#AE1B21' },
      { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/ahmed-hassan-64b2413a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#00eeff' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201008293713', color: '#25D366' }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
