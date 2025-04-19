import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export function ApplicationInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return async () => {
    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    const deaultLang = 'en';
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(deaultLang);
    try {
      await firstValueFrom(translate.use(deaultLang));
    } catch (err) {
      console.error(err);
    }
  };
}
