import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNotificacionesPushPage } from './modal-notificaciones-push.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNotificacionesPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNotificacionesPushPageRoutingModule {}
