import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailvetPage } from './detailvet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailvetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailvetPageRoutingModule {}
