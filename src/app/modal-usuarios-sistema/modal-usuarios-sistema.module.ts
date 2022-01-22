import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalUsuariosSistemaPageRoutingModule } from './modal-usuarios-sistema-routing.module';

import { ModalUsuariosSistemaPage } from './modal-usuarios-sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalUsuariosSistemaPageRoutingModule
  ],
  declarations: [ModalUsuariosSistemaPage]
})
export class ModalUsuariosSistemaPageModule {}
