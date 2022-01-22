import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesComPage } from './opciones-com.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesComPageRoutingModule {}
