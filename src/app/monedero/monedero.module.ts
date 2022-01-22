import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonederoPageRoutingModule } from './monedero-routing.module';

import { MonederoPage } from './monedero.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonederoPageRoutingModule,
    Ng2SearchPipeModule,
    SpinnerModule
  ],
  declarations: [MonederoPage]
})
export class MonederoPageModule {}
