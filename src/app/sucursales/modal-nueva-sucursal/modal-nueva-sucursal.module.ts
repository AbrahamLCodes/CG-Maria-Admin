import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevaSucursalPageRoutingModule } from './modal-nueva-sucursal-routing.module';

import { ModalNuevaSucursalPage } from './modal-nueva-sucursal.page';
import {  NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevaSucursalPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevaSucursalPage]
})
export class ModalNuevaSucursalPageModule {}
