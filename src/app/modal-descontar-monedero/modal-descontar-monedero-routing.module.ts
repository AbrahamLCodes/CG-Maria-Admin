import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDescontarMonederoPage } from './modal-descontar-monedero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDescontarMonederoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDescontarMonederoPageRoutingModule {}
