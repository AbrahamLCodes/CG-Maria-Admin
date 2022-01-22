import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesPromosPage } from './opciones-promos.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesPromosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesPromosPageRoutingModule {}
