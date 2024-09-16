import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuVisible: boolean = false;
  email: string = 'tamayozapatajuanfernando@gmail.com';

  constructor() {
    
  }

  ngOnInit(): void {
    this.setupPageNavigation();
  }

  /**
   * Sets up the navigation links to toggle the active page.
   * @return {void} No return value.
   */
  setupPageNavigation(): void {
    const navigationLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');

    navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navigationLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');

        pages.forEach((page) => page.classList.remove('active'));
        const pageName = link.textContent?.toLowerCase();
        const targetPage = Array.from(pages).find(
          (page) => page.getAttribute('data-page') === pageName
        );
        targetPage?.classList.add('active');
      });
    });
  }

  /**
   * Toggles the visibility of the menu.
   * @return {void} No return value.
   */
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
