import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditUsuariosSistemaPage } from './modal-edit-usuarios-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditUsuariosSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditUsuariosSistemaPageRoutingModule {}
