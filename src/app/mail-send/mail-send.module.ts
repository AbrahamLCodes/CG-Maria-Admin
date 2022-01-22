import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailSendPageRoutingModule } from './mail-send-routing.module';

import { MailSendPage } from './mail-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailSendPageRoutingModule
  ],
  declarations: [MailSendPage]
})
export class MailSendPageModule {}
