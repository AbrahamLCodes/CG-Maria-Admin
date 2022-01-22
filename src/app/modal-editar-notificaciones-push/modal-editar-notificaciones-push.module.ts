import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditarNotificacionesPushPageRoutingModule } from './modal-editar-notificaciones-push-routing.module';

import { ModalEditarNotificacionesPushPage } from './modal-editar-notificaciones-push.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarNotificacionesPushPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [ModalEditarNotificacionesPushPage]
})
export class ModalEditarNotificacionesPushPageModule {}
