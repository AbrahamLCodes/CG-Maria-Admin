import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSecVerProductoPageRoutingModule } from './modal-sec-ver-producto-routing.module';

import { ModalSecVerProductoPage } from './modal-sec-ver-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSecVerProductoPageRoutingModule,
  ],
  declarations: [ModalSecVerProductoPage]
})
export class ModalSecVerProductoPageModule {}
