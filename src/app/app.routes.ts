import { Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Aulacomponent } from './components/aulacomponent/aulacomponent';
import { Alistcomponent } from './components/aulacomponent/alistcomponent/alistcomponent';
import { Ainsertcomponent } from './components/aulacomponent/ainsertcomponent/ainsertcomponent';
import { Colegiocomponent } from './components/colegiocomponent/colegiocomponent';
import { Clistcomponent } from './components/colegiocomponent/clistcomponent/clistcomponent';
import { Cinsertcomponent } from './components/colegiocomponent/cinsertcomponent/cinsertcomponent';
import { Rolcomponent } from './components/rolcomponent/rolcomponent';
import { Rlistcomponent } from './components/rolcomponent/rlistcomponent/rlistcomponent';
import { Rinsertcomponent } from './components/rolcomponent/rinsertcomponent/rinsertcomponent';

export const routes: Routes = [
  {
    path: '',
    component: Homecomponent,
  },

  {
    path: 'aula',
    component: Aulacomponent,
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: Alistcomponent },
      { path: 'insertar', component: Ainsertcomponent },
    ],
  },

  {
    path: 'colegio',
    component: Colegiocomponent,
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: Clistcomponent },
      { path: 'insertar', component: Cinsertcomponent },
    ],
  },

  {
    path: 'rol',
    component: Rolcomponent,
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: Rlistcomponent },
      { path: 'insertar', component: Rinsertcomponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
