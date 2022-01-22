import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesCatPage } from './opciones-cat.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesCatPageRoutingModule {}
