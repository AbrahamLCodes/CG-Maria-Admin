import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalNuevaSucursalPage } from '../modal-nueva-sucursal/modal-nueva-sucursal.page';
@Component({
  selector: 'app-opciones-sucursales',
  templateUrl: './opciones-sucursales.page.html',
  styleUrls: ['./opciones-sucursales.page.scss'],
})
export class OpcionesSucursalesPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }
  
  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevaSucursalPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
   
  }

}
