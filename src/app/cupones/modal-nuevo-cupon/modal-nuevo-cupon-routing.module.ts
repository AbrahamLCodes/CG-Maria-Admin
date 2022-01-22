import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoCuponPage } from './modal-nuevo-cupon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoCuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoCuponPageRoutingModule {}
