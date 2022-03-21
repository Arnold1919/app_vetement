import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailvetPageRoutingModule } from './detailvet-routing.module';

import { DetailvetPage } from './detailvet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailvetPageRoutingModule
  ],
  declarations: [DetailvetPage]
})
export class DetailvetPageModule {}
