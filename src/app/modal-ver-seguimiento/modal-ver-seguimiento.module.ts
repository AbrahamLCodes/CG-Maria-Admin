import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerSeguimientoPageRoutingModule } from './modal-ver-seguimiento-routing.module';

import { ModalVerSeguimientoPage } from './modal-ver-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerSeguimientoPageRoutingModule
  ],
  declarations: [ModalVerSeguimientoPage]
})
export class ModalVerSeguimientoPageModule {}
