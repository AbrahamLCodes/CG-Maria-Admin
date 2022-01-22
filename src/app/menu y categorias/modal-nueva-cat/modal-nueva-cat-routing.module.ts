import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevaCatPage } from './modal-nueva-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevaCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevaCatPageRoutingModule {}
