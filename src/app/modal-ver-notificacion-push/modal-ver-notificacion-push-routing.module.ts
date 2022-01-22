import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerNotificacionPushPage } from './modal-ver-notificacion-push.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerNotificacionPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerNotificacionPushPageRoutingModule {}
