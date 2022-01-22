import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingOpcionesPageRoutingModule } from './marketing-opciones-routing.module';

import { MarketingOpcionesPage } from './marketing-opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingOpcionesPageRoutingModule
  ],
  declarations: [MarketingOpcionesPage]
})
export class MarketingOpcionesPageModule {}
