import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortafilioComponent } from './portafilio/portafilio.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'resume',
        component: ResumeComponent,
      },
      {
        path: 'portafolio',
        component: PortafilioComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
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
