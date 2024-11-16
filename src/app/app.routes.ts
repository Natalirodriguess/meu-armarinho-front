import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'produto',
    loadComponent: () => import('./produto/produto.component').then(m => m.ProdutoComponent)
  }
];
