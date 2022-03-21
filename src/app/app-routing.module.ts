import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'vetement',
    pathMatch: 'full'
  },
  {
    path: 'vetement',
    loadChildren: () => import('./vetement/vetement.module').then( m => m.VetementPageModule)
  },
  {
    path: 'vetement/:id',
    loadChildren: () => import('./vetement/detailvet/detailvet.module').then( m => m.DetailvetPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./vetement/formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'modify/:id',
    loadChildren: () => import('./vetement/modify/modify.module').then( m => m.ModifyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
