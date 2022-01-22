import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarNotificacionesPushPage } from './modal-editar-notificaciones-push.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarNotificacionesPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarNotificacionesPushPageRoutingModule {}
