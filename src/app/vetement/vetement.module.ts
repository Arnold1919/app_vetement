import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetementPageRoutingModule } from './vetement-routing.module';

import { VetementPage } from './vetement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetementPageRoutingModule
  ],
  declarations: [VetementPage]
})
export class VetementPageModule {}
