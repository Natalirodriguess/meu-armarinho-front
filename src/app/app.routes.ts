import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'secundaria',
    loadComponent: () => import('./pg-secundaria/pg-secundaria.component').then(m => m.PgSecundariaComponent)
  }
];
