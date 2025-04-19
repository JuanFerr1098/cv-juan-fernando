import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MultiLanguageService {
  defaultLang = 'en';
  _localeEvent$ = new Subject<string>();
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get localeEvent$() {
    return this._localeEvent$.asObservable();
  }

  changeLocale(locale: string) {
    if (this.translate.currentLang !== locale) {
      this.translate.use(locale);
      localStorage.setItem('selectedLanguage', locale);
      this._localeEvent$.next(locale);
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getLanguages() {
    return this.translate.getLangs();
  }

  getSavedLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('selectedLanguage') || this.defaultLang;
    }
    return this.defaultLang;
  }
}