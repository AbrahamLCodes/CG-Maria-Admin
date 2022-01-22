import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoComPageRoutingModule } from './modal-nuevo-com-routing.module';

import { ModalNuevoComPage } from './modal-nuevo-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoComPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevoComPage]
})
export class ModalNuevoComPageModule {}
