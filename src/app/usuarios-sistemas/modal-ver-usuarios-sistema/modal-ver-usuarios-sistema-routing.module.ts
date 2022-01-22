import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerUsuariosSistemaPage } from './modal-ver-usuarios-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerUsuariosSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerUsuariosSistemaPageRoutingModule {}
