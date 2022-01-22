import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesSeguimientoItemPage } from './opciones-seguimiento-item.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesSeguimientoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesSeguimientoItemPageRoutingModule {}
