import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoUsuarioPageRoutingModule } from './modal-nuevo-usuario-routing.module';

import { ModalNuevoUsuarioPage } from './modal-nuevo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevoUsuarioPage]
})
export class ModalNuevoUsuarioPageModule {}
