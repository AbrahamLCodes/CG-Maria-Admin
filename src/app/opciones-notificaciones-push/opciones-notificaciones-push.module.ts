import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesNotificacionesPushPageRoutingModule } from './opciones-notificaciones-push-routing.module';

import { OpcionesNotificacionesPushPage } from './opciones-notificaciones-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesNotificacionesPushPageRoutingModule
  ],
  declarations: [OpcionesNotificacionesPushPage]
})
export class OpcionesNotificacionesPushPageModule {}
