import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditRepartidorSistemaPageRoutingModule } from './modal-edit-repartidor-sistema-routing.module';

import { ModalEditRepartidorSistemaPage } from './modal-edit-repartidor-sistema.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditRepartidorSistemaPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditRepartidorSistemaPage]
})
export class ModalEditRepartidorSistemaPageModule {}
