import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditCuponPageRoutingModule } from './modal-edit-cupon-routing.module';

import { ModalEditCuponPage } from './modal-edit-cupon.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditCuponPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalEditCuponPage]
})
export class ModalEditCuponPageModule {}
