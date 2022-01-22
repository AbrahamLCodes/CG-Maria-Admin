import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCargarEditMenuPage } from './modal-cargar-edit-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCargarEditMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCargarEditMenuPageRoutingModule {}
