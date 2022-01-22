import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAbonarMonederoPage } from './modal-abonar-monedero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAbonarMonederoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAbonarMonederoPageRoutingModule {}
