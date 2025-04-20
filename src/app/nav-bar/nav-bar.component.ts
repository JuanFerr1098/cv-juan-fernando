import { Component, OnInit } from '@angular/core';
import { MultiLanguageService } from '../shared/multi-language.service';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ NgIf,
      NgFor, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  dropdownLang = false;
  dropdownTheme = false;
  public selectedLanguage: string = 'en';
  public selectedTheme: string = 'light';
  listLanguage = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];
  listTheme = ['light', 'dark', 'custom'];

  getFlag = (language: string): string => {
    const flags: { [key: string]: string } = {
      es: 'https://flagcdn.com/w40/co.png', // España
      en: 'https://flagcdn.com/w40/us.png', // EE.UU.
    };
    return flags[language] || 'https://flagcdn.com/w40/un.png';
  }
  public selectedFlag: string = this.getFlag(this.selectedLanguage);

  constructor(private _languageService: MultiLanguageService,
    private _themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.selectedFlag= this.getFlag(this.selectedLanguage);
  }

  toggleDropdownLang() {
    this.dropdownLang = !this.dropdownLang;
  }

  toggleDropdownTheme() {
    this.dropdownTheme = !this.dropdownTheme;
  }

  selectLanguage(lang?: string) {
    this.selectedLanguage = lang ?? '';
    this.dropdownLang = false;
    this._languageService.changeLocale(this.selectedLanguage);
  }

  selectTheme(theme?: string) {
    this.selectedTheme = theme ?? '';
    this.dropdownTheme = false;
    this._themeService.setTheme(this.selectedTheme);
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.dropdownLang = false;
    this._languageService.changeLocale(this.selectedLanguage);
  }  

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.dropdownTheme = false;
    this._themeService.setTheme(this.selectedTheme);
  }

  labelTheme(theme: string): string {
    return 'navbar.' + theme;
  }

  labelLanguage(value: string): string {
    const lang = this.listLanguage.find(lang => lang.value === value);
    return lang ? lang.label : value;
  }
}