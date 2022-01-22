import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalEditarPageRoutingModule } from './modal-editar-routing.module';

import { ModalEditarPage } from './modal-editar.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditarPage]
})
export class ModalEditarPageModule {}
