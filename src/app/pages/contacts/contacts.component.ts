
import { Component } from '@angular/core';
import { ReuseComponent } from '../../shared/components/reuse/reuse.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ReuseComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  title: string = 'تواصل معنا';

  isloading: boolean = false;
  showSuccessMsg: boolean = false;
  showErrorMsg: boolean = false;

  sendEmail(e: Event): void {
    e.preventDefault();

    this.isloading = true;
    this.showSuccessMsg = false;
    this.showErrorMsg = false;

    emailjs.sendForm(
      'service_oksmjsg',
      'template_4u9mwcg',
      e.target as HTMLFormElement,
      { publicKey: 'qYvGdzctEpPqmAz9m' }
    ).then(
      () => {
        this.isloading = false;
        this.showSuccessMsg = true;
        (e.target as HTMLFormElement).reset();

        // إخفاء رسالة النجاح بعد 4 ثواني
        setTimeout(() => {
          this.showSuccessMsg = false;
        }, 9000);
      },
      (error) => {
        console.error('Email failed:', error);
        this.isloading = false;
        this.showErrorMsg = true;


        setTimeout(() => {
          this.showErrorMsg = false;
        }, 9000);
      }
    );
  }

  contacts: {
    icon: string;
    email?: string;
    phone?: string;
    location?: string;
  }[] = [
    { icon: 'fa-solid fa-envelope-circle-check', email: 'info@aquaguardeg.com' },
    { icon: 'fa-solid fa-square-phone', phone: '01008293713' },
    { icon: 'fa-solid fa-location-dot', location: 'مطروح, كيلو 2' }
  ];

  socials: {
    icon: string;
    url: string;
    color: string;
  }[] = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/AQUAGUARD90', color: '#00eeff' },
    { icon: 'fa-tiktok', url: 'https://www.tiktok.com/@aqua.guard.contra', color: '#000000' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/aquaguardcontracting', color: '#AE1B21' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/ahmed-hassan-64b2413a5', color: '#00eeff' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201008293713', color: '#25D366' }
  ];

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
