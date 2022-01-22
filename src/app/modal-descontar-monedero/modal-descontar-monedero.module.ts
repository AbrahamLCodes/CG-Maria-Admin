import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDescontarMonederoPageRoutingModule } from './modal-descontar-monedero-routing.module';

import { ModalDescontarMonederoPage } from './modal-descontar-monedero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDescontarMonederoPageRoutingModule
  ],
  declarations: [ModalDescontarMonederoPage]
})
export class ModalDescontarMonederoPageModule {}
