import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingOpcionesPage } from './marketing-opciones.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingOpcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingOpcionesPageRoutingModule {}
