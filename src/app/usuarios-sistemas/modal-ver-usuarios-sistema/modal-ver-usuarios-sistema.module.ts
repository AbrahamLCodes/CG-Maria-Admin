import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerUsuariosSistemaPageRoutingModule } from './modal-ver-usuarios-sistema-routing.module';

import { ModalVerUsuariosSistemaPage } from './modal-ver-usuarios-sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerUsuariosSistemaPageRoutingModule
  ],
  declarations: [ModalVerUsuariosSistemaPage]
})
export class ModalVerUsuariosSistemaPageModule {}
