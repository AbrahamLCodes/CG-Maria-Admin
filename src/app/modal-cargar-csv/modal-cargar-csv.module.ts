import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCargarCsvPageRoutingModule } from './modal-cargar-csv-routing.module';

import { ModalCargarCsvPage } from './modal-cargar-csv.page';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCargarCsvPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalCargarCsvPage]
})
export class ModalCargarCsvPageModule {}
