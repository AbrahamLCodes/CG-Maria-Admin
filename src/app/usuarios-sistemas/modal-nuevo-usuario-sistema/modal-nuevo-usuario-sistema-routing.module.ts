import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoUsuarioSistemaPage } from './modal-nuevo-usuario-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoUsuarioSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoUsuarioSistemaPageRoutingModule {}
