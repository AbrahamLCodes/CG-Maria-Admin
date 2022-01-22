import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarComPageRoutingModule } from './modal-editar-com-routing.module';

import { ModalEditarComPage } from './modal-editar-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarComPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditarComPage]
})
export class ModalEditarComPageModule {}
