import { NgIf, NgFor, NgClass, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MultiLanguageService } from '../shared/multi-language.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    NgIf,
    NgFor,
    NgClass,
    CommonModule,
    MatCardModule,
    TranslateModule,
    NgFor,
    FormsModule
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  title = 'cv-juan-fernando';
  menuVisible: boolean = true;
  email: string = 'tamayozapatajuanfernando@gmail.com';
  selectedLanguage = 'en';
  listLanguage = [
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
  ];

  // Array que contiene los nombres de las páginas de navegación
  navigationLinks: string[] = ['about', 'resume', 'portafolio', 'contact'];
  activeLink: string = 'about'; // Enlace activo
  //activePage: string = 'about'; // Página activa
  constructor(
    private router: Router,
    private languageService: MultiLanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getSavedLanguage() ?? 'en';
    this.languageService.changeLocale(this.selectedLanguage);
  }

  /**
   * Sets the active link and page based on the given page name.
   *
   * @param page The name of the page to navigate to.
   * @return {void} No return value.
   */
  navigateToPage(page: string): void {
    this.activeLink = page;
    this.router.navigate([page]);
  }

  /**
   * Toggles the visibility of the menu.
   * @return {void} No return value.
   */
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  initializeLanguage(): void {
    this.selectedLanguage = this.languageService.getCurrentLanguage();
    this.languageService.changeLocale(this.selectedLanguage);
  }

  changeLanguage(event: Event): void {
    this.selectedLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.changeLocale(this.selectedLanguage);
  }
}