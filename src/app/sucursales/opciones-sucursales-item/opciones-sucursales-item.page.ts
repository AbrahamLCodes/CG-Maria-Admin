import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalEditarSucursalPage } from '../modal-editar-sucursal/modal-editar-sucursal.page';
import { ModalVerSucursalPage } from '../modal-ver-sucursal/modal-ver-sucursal.page';
@Component({
  selector: 'app-opciones-sucursales-item',
  templateUrl: './opciones-sucursales-item.page.html',
  styleUrls: ['./opciones-sucursales-item.page.scss'],
})
export class OpcionesSucursalesItemPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }
  
  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditarSucursalPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerSucursalPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
  }
  async alert(tipo) {
    if(tipo ==="borrar"){
      const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Confirmación',
        message: 'Se borrará el elemento seleccionado',
        buttons: ['OK']
      });
  
      await alert.present();
    }

  }
}
