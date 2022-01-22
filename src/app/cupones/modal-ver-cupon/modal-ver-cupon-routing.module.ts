import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerCuponPage } from './modal-ver-cupon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerCuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerCuponPageRoutingModule {}
