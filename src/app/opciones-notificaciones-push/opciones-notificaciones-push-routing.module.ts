import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesNotificacionesPushPage } from './opciones-notificaciones-push.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesNotificacionesPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesNotificacionesPushPageRoutingModule {}
