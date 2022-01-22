import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoSeguimientoPageRoutingModule } from './modal-nuevo-seguimiento-routing.module';

import { ModalNuevoSeguimientoPage } from './modal-nuevo-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoSeguimientoPageRoutingModule
  ],
  declarations: [ModalNuevoSeguimientoPage]
})
export class ModalNuevoSeguimientoPageModule {}
