import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarCatPageRoutingModule } from './modal-editar-cat-routing.module';

import { ModalEditarCatPage } from './modal-editar-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarCatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditarCatPage]
})
export class ModalEditarCatPageModule {}
