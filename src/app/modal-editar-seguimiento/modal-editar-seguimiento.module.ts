import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarSeguimientoPageRoutingModule } from './modal-editar-seguimiento-routing.module';

import { ModalEditarSeguimientoPage } from './modal-editar-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarSeguimientoPageRoutingModule
  ],
  declarations: [ModalEditarSeguimientoPage]
})
export class ModalEditarSeguimientoPageModule {}
