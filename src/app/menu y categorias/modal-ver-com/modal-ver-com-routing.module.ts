import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerComPage } from './modal-ver-com.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerComPageRoutingModule {}
