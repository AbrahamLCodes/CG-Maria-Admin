import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerIngresosPageRoutingModule } from './modal-ver-ingresos-routing.module';

import { ModalVerIngresosPage } from './modal-ver-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerIngresosPageRoutingModule
  ],
  declarations: [ModalVerIngresosPage]
})
export class ModalVerIngresosPageModule {}
