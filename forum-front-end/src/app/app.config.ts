import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes, withComponentInputBinding()), 
      provideClientHydration(), 
      provideHttpClient(withFetch(), withInterceptorsFromDi()), 
      importProvidersFrom(
        JwtModule.forRoot({
          config: {
            
          }
        })
      )
    ]
};
