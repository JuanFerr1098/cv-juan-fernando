import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  PLATFORM_ID,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: string = 'light';
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadTheme();
  }

  setTheme(theme: string) {
    if (!this.isBrowser) return; // Evita errores en SSR
    this.currentTheme = theme;
    this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  }

  getTheme(): string {
    return this.currentTheme;
  }

  loadTheme() {
    if (!this.isBrowser) return;
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
  }
}
