import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditarComPage } from './modal-editar-com.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditarComPageRoutingModule {}
