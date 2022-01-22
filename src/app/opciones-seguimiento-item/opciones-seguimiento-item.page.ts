import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { ModalEditarPage } from '../menu y categorias/modal-editar/modal-editar.page';
import { ModalVerProductoPage } from '../menu y categorias/modal-ver-producto/modal-ver-producto.page';
import { ModalVerSeguimientoPage } from '../modal-ver-seguimiento/modal-ver-seguimiento.page';

@Component({
  selector: 'app-opciones-seguimiento-item',
  templateUrl: './opciones-seguimiento-item.page.html',
  styleUrls: ['./opciones-seguimiento-item.page.scss'],
})
export class OpcionesSeguimientoItemPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController, public popoverController: PopoverController,) { }

  ngOnInit() {
  }

  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }


  async modal(tipo) {
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerSeguimientoPage,
        cssClass: 'modalVer',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditarPage,
        cssClass: 'modalEditar',
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
        message: 'Se archivará el elemento seleccionado',
        buttons: ['OK']
      });
  
      await alert.present();
    }

  }

}
