import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalUsuariosSistemaPage } from './modal-usuarios-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalUsuariosSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalUsuariosSistemaPageRoutingModule {}
