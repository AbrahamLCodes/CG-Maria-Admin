import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClikyNotesPage } from './cliky-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ClikyNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClikyNotesPageRoutingModule {}
