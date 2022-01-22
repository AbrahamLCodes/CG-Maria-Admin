import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalKeysPagosPageRoutingModule } from './modal-keys-pagos-routing.module';

import { ModalKeysPagosPage } from './modal-keys-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalKeysPagosPageRoutingModule
  ],
  declarations: [ModalKeysPagosPage]
})
export class ModalKeysPagosPageModule {}
