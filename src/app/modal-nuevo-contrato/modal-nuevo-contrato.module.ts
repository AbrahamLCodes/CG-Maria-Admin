import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoContratoPageRoutingModule } from './modal-nuevo-contrato-routing.module';

import { ModalNuevoContratoPage } from './modal-nuevo-contrato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoContratoPageRoutingModule
  ],
  declarations: [ModalNuevoContratoPage]
})
export class ModalNuevoContratoPageModule {}
