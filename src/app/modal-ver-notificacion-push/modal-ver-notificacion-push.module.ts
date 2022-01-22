import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerNotificacionPushPageRoutingModule } from './modal-ver-notificacion-push-routing.module';

import { ModalVerNotificacionPushPage } from './modal-ver-notificacion-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerNotificacionPushPageRoutingModule
  ],
  declarations: [ModalVerNotificacionPushPage]
})
export class ModalVerNotificacionPushPageModule {}
