import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesCategoriaPage } from './opciones-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesCategoriaPageRoutingModule {}
