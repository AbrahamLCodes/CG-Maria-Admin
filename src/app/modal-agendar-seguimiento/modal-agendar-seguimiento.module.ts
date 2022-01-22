import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAgendarSeguimientoPageRoutingModule } from './modal-agendar-seguimiento-routing.module';

import { ModalAgendarSeguimientoPage } from './modal-agendar-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAgendarSeguimientoPageRoutingModule
  ],
  declarations: [ModalAgendarSeguimientoPage]
})
export class ModalAgendarSeguimientoPageModule {}
