import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNotificacionesPushPageRoutingModule } from './modal-notificaciones-push-routing.module';

import { ModalNotificacionesPushPage } from './modal-notificaciones-push.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNotificacionesPushPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalNotificacionesPushPage]
})
export class ModalNotificacionesPushPageModule {}
