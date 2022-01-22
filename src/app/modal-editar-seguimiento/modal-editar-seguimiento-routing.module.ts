import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarSeguimientoPage } from './modal-editar-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarSeguimientoPageRoutingModule {}
