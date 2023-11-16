import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true}))
  ]
};
