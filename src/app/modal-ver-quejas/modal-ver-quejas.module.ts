import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerQuejasPageRoutingModule } from './modal-ver-quejas-routing.module';

import { ModalVerQuejasPage } from './modal-ver-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerQuejasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalVerQuejasPage]
})
export class ModalVerQuejasPageModule {}
