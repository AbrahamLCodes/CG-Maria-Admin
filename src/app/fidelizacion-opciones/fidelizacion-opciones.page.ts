import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-fidelizacion-opciones',
  templateUrl: './fidelizacion-opciones.page.html',
  styleUrls: ['./fidelizacion-opciones.page.scss'],
})
export class FidelizacionOpcionesPage implements OnInit {

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
  }
  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }
}
