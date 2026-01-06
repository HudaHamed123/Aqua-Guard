import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, NgIf],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  whatsappNumber: string = '201008293713';

title='pools'
  private readonly flowbiteService = inject(FlowbiteService);
  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite();
 }

 showScrollTop = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showScrollTop = window.scrollY > 200;
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
