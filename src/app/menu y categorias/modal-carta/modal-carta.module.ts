import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCartaPageRoutingModule } from './modal-carta-routing.module';

import { ModalCartaPage } from './modal-carta.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCartaPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalCartaPage]
})
export class ModalCartaPageModule {}
