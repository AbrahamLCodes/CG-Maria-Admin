import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevaPromoPageRoutingModule } from './modal-nueva-promo-routing.module';

import { ModalNuevaPromoPage } from './modal-nueva-promo.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevaPromoPageRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [ModalNuevaPromoPage]
})
export class ModalNuevaPromoPageModule {}
