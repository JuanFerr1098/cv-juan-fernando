import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  Injector,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationInitializerFactory, HttpLoaderFactory } from './translation.config';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: ApplicationInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
