import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevaCotizacionPageRoutingModule } from './modal-nueva-cotizacion-routing.module';

import { ModalNuevaCotizacionPage } from './modal-nueva-cotizacion.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevaCotizacionPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalNuevaCotizacionPage]
})
export class ModalNuevaCotizacionPageModule {}
