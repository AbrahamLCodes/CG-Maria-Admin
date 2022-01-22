import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCargarCsvPage } from './modal-cargar-csv.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCargarCsvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCargarCsvPageRoutingModule {}
