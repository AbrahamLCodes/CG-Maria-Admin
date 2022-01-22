import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerUsuarioPage } from './modal-ver-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerUsuarioPageRoutingModule {}
