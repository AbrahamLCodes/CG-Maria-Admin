import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHistorialMonederoPageRoutingModule } from './modal-historial-monedero-routing.module';

import { ModalHistorialMonederoPage } from './modal-historial-monedero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHistorialMonederoPageRoutingModule
  ],
  declarations: [ModalHistorialMonederoPage]
})
export class ModalHistorialMonederoPageModule {}
