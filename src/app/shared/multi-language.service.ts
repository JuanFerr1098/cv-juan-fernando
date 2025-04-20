import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MultiLanguageService {
  defaultLang = 'en';
  _localeEvent$ = new Subject<string>();
  constructor(private translate: TranslateService) {}

  get localeEvent$() {
    return this._localeEvent$;
  }

  changeLocale(locale: string) {
      this.translate.use(locale);
      this._localeEvent$.next(locale);
    // }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getLanguages() {
    return this.translate.getLangs();
  }
}