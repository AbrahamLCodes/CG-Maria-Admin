import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAbonarMonederoPageRoutingModule } from './modal-abonar-monedero-routing.module';

import { ModalAbonarMonederoPage } from './modal-abonar-monedero.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAbonarMonederoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ModalAbonarMonederoPage]
})
export class ModalAbonarMonederoPageModule {}
