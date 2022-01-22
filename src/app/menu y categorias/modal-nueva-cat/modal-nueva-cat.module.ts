import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevaCatPageRoutingModule } from './modal-nueva-cat-routing.module';

import { ModalNuevaCatPage } from './modal-nueva-cat.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevaCatPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevaCatPage]
})
export class ModalNuevaCatPageModule {}
