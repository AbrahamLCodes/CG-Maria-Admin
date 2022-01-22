import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoRepartidorSistemaPageRoutingModule } from './modal-nuevo-repartidor-sistema-routing.module';

import { ModalNuevoRepartidorSistemaPage } from './modal-nuevo-repartidor-sistema.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoRepartidorSistemaPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevoRepartidorSistemaPage]
})
export class ModalNuevoRepartidorSistemaPageModule {}
