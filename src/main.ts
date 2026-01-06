import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if (typeof window !== 'undefined') {
  import('swiper/element/bundle').then(({ register }) => {
    register();
  });
}

bootstrapApplication(AppComponent, appConfig).catch(console.error);
