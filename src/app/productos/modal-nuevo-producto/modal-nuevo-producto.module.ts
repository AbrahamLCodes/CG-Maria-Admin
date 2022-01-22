import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoProductoPageRoutingModule } from './modal-nuevo-producto-routing.module';

import { ModalNuevoProductoPage } from './modal-nuevo-producto.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoProductoPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalNuevoProductoPage]
})
export class ModalNuevoProductoPageModule {}
