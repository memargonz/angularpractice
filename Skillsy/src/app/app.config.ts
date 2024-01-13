import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
