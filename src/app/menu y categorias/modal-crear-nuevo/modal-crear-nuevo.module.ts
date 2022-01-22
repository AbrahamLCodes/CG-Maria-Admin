import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCrearNuevoPageRoutingModule } from './modal-crear-nuevo-routing.module';

import { ModalCrearNuevoPage } from './modal-crear-nuevo.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCrearNuevoPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalCrearNuevoPage]
})
export class ModalCrearNuevoPageModule {}
