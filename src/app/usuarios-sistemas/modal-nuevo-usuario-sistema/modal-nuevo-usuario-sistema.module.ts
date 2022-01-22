import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoUsuarioSistemaPageRoutingModule } from './modal-nuevo-usuario-sistema-routing.module';

import { ModalNuevoUsuarioSistemaPage } from './modal-nuevo-usuario-sistema.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoUsuarioSistemaPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevoUsuarioSistemaPage]
})
export class ModalNuevoUsuarioSistemaPageModule {}
