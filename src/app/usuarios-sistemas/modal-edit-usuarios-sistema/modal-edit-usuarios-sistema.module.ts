import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditUsuariosSistemaPageRoutingModule } from './modal-edit-usuarios-sistema-routing.module';

import { ModalEditUsuariosSistemaPage } from './modal-edit-usuarios-sistema.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditUsuariosSistemaPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditUsuariosSistemaPage]
})
export class ModalEditUsuariosSistemaPageModule {}
