import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoRepartidorSistemaPage } from './modal-nuevo-repartidor-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoRepartidorSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoRepartidorSistemaPageRoutingModule {}
