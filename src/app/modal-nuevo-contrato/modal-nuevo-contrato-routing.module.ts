import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoContratoPage } from './modal-nuevo-contrato.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoContratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoContratoPageRoutingModule {}
