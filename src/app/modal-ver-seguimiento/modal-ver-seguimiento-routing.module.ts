import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerSeguimientoPage } from './modal-ver-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerSeguimientoPageRoutingModule {}
