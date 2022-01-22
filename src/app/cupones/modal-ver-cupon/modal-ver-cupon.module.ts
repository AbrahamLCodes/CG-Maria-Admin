import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerCuponPageRoutingModule } from './modal-ver-cupon-routing.module';

import { ModalVerCuponPage } from './modal-ver-cupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerCuponPageRoutingModule
  ],
  declarations: [ModalVerCuponPage]
})
export class ModalVerCuponPageModule {}
