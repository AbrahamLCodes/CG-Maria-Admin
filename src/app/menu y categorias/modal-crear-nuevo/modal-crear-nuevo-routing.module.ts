import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCrearNuevoPage } from './modal-crear-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrearNuevoPageRoutingModule {}
