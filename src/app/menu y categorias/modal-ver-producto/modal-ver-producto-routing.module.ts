import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerProductoPage } from './modal-ver-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerProductoPageRoutingModule {}
