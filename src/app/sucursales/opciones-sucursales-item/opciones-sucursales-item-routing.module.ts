import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesSucursalesItemPage } from './opciones-sucursales-item.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesSucursalesItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesSucursalesItemPageRoutingModule {}
