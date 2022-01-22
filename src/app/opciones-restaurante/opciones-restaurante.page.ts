import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-opciones-restaurante',
  templateUrl: './opciones-restaurante.page.html',
  styleUrls: ['./opciones-restaurante.page.scss'],
})
export class OpcionesRestaurantePage implements OnInit {

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
  }
  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }
}
