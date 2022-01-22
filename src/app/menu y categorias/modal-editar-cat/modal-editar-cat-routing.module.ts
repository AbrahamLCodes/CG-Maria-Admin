import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarCatPage } from './modal-editar-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarCatPageRoutingModule {}
