import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarSucursalPageRoutingModule } from './modal-editar-sucursal-routing.module';

import { ModalEditarSucursalPage } from './modal-editar-sucursal.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarSucursalPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditarSucursalPage]
})
export class ModalEditarSucursalPageModule {}
