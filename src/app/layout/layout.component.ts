import { NgClass, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    NgClass,
    CommonModule,
    TranslateModule,
    NavBarComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  title = 'cv-juan-fernando';
  menuVisible: boolean = true;
  email: string = 'tamayozapatajuanfernando@gmail.com';
  selectedLanguage = 'en';
  selectedTheme = 'light';
  isAsideOpen = false;
 
  themes = ['light', 'dark', 'custom'];

  navigationLinks: string[] = ['about', 'resume', 'portafolio', 'contact'];
  activeLink: string = 'about';
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
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
}