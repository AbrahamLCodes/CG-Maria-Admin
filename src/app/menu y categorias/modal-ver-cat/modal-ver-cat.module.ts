import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerCatPageRoutingModule } from './modal-ver-cat-routing.module';

import { ModalVerCatPage } from './modal-ver-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerCatPageRoutingModule
  ],
  declarations: [ModalVerCatPage]
})
export class ModalVerCatPageModule {}
