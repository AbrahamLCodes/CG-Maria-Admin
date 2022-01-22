import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditRepartidorSistemaPage } from './modal-edit-repartidor-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditRepartidorSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditRepartidorSistemaPageRoutingModule {}
