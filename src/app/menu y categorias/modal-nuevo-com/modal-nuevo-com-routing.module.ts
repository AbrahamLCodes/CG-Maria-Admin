import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoComPage } from './modal-nuevo-com.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoComPageRoutingModule {}
