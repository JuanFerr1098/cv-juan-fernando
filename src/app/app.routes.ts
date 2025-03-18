import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
      },
      {
        path: 'resume',
        loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent),
      },
      {
        path: 'portafolio',
        loadComponent: () => import('./portafilio/portafilio.component').then(m => m.PortafilioComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
