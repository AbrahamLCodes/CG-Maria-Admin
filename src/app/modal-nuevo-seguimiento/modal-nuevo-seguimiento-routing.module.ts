import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoSeguimientoPage } from './modal-nuevo-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoSeguimientoPageRoutingModule {}
