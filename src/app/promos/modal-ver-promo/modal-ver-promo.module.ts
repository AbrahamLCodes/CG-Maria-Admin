import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerPromoPageRoutingModule } from './modal-ver-promo-routing.module';

import { ModalVerPromoPage } from './modal-ver-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerPromoPageRoutingModule
  ],
  declarations: [ModalVerPromoPage]
})
export class ModalVerPromoPageModule {}
