import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditCuponPage } from './modal-edit-cupon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditCuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditCuponPageRoutingModule {}
