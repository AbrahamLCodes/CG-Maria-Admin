import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarSucursalPage } from './modal-editar-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarSucursalPageRoutingModule {}
