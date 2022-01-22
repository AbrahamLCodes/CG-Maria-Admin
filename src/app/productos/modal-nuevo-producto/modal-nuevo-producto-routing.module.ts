import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoProductoPage } from './modal-nuevo-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoProductoPageRoutingModule {}
