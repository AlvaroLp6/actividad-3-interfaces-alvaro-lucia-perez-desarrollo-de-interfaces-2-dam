import { Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
    {
    path: 'galeria',
    loadComponent: () => import('./galeria/galeria.component').then((m) => m.GaleriaComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
{
  path: 'galeria',
  component: GaleriaComponent 
}
];
