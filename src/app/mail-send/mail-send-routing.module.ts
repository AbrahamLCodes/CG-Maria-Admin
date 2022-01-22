import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailSendPage } from './mail-send.page';

const routes: Routes = [
  {
    path: '',
    component: MailSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailSendPageRoutingModule {}
