import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerComPageRoutingModule } from './modal-ver-com-routing.module';

import { ModalVerComPage } from './modal-ver-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerComPageRoutingModule
  ],
  declarations: [ModalVerComPage]
})
export class ModalVerComPageModule {}
