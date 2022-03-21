import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailvetPage } from './detailvet/detailvet.page';
import { FormulairePage } from './formulaire/formulaire.page';

import { VetementPage } from './vetement.page';

const routes: Routes = [
  {
    path: '',
    component: VetementPage
  },
  {
    path: ':id',
    component: DetailvetPage
  },

  {
    path: 'detailvet',
    loadChildren: () => import('./detailvet/detailvet.module').then( m => m.DetailvetPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'modify',
    loadChildren: () => import('./modify/modify.module').then( m => m.ModifyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetementPageRoutingModule {}
