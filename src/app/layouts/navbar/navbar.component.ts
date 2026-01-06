import {Component,ElementRef,ViewChild,HostListener,AfterViewInit,Inject,PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

 @ViewChild('navbar') navbar!: ElementRef;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    // خلي البداية شفافة
    gsap.set(this.navbar.nativeElement, {
      backgroundColor: 'transparent'
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser) return;

    if (window.scrollY > 50) {
      gsap.to(this.navbar.nativeElement, {
        backgroundColor: '#ffffff',
        duration: 0.4,
        ease: 'power2.out'
      });
    } else {
      gsap.to(this.navbar.nativeElement, {
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }
}