import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosappPage } from './usuariosapp.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosappPageRoutingModule {}
