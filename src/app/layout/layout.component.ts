import { NgIf, NgFor, NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, NgIf, NgFor, NgClass, CommonModule, AboutComponent, ResumeComponent, MatCardModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title = 'cv-juan-fernando';
  menuVisible: boolean = true;
  email: string = 'tamayozapatajuanfernando@gmail.com';

  // Array que contiene los nombres de las páginas de navegación
  navigationLinks: string[] = ['about', 'resume', 'portafolio', 'contact'];
  activeLink: string = 'about'; // Enlace activo
  //activePage: string = 'about'; // Página activa
  constructor(private router: Router) {}

  /**
   * Sets the active link and page based on the given page name.
   *
   * @param page The name of the page to navigate to.
   * @return {void} No return value.
   */
  navigateToPage(page: string): void {
    this.activeLink = page;
    //this.activePage = page;
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
