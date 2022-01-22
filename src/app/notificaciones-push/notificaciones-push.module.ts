import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPushPageRoutingModule } from './notificaciones-push-routing.module';

import { NotificacionesPushPage } from './notificaciones-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPushPageRoutingModule
  ],
  declarations: [NotificacionesPushPage]
})
export class NotificacionesPushPageModule {}
