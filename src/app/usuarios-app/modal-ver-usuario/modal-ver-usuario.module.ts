import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerUsuarioPageRoutingModule } from './modal-ver-usuario-routing.module';

import { ModalVerUsuarioPage } from './modal-ver-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerUsuarioPageRoutingModule
  ],
  declarations: [ModalVerUsuarioPage]
})
export class ModalVerUsuarioPageModule {}
