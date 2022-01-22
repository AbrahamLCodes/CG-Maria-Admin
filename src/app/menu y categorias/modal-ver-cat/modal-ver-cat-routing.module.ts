import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerCatPage } from './modal-ver-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerCatPageRoutingModule {}
