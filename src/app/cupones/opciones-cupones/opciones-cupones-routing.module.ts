import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesCuponesPage } from './opciones-cupones.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesCuponesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesCuponesPageRoutingModule {}
