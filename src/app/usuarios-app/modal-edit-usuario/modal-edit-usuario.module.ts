import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditUsuarioPageRoutingModule } from './modal-edit-usuario-routing.module';

import { ModalEditUsuarioPage } from './modal-edit-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditUsuarioPageRoutingModule
  ],
  declarations: [ModalEditUsuarioPage]
})
export class ModalEditUsuarioPageModule {}
