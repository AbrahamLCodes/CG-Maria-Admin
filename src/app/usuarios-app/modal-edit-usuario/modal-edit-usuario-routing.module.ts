import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditUsuarioPage } from './modal-edit-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditUsuarioPageRoutingModule {}
