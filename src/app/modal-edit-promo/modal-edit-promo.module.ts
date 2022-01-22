import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditPromoPageRoutingModule } from './modal-edit-promo-routing.module';

import { ModalEditPromoPage } from './modal-edit-promo.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditPromoPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalEditPromoPage]
})
export class ModalEditPromoPageModule {}
