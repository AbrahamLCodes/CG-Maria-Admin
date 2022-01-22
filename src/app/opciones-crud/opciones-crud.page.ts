import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditarPage } from '../menu y categorias/modal-editar/modal-editar.page'
import { ModalVerProductoPage } from '../menu y categorias/modal-ver-producto/modal-ver-producto.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-opciones-crud',
  templateUrl: './opciones-crud.page.html',
  styleUrls: ['./opciones-crud.page.scss'],
})
export class OpcionesCrudPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerProductoPage,
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
        message: 'Se borrará el elemento seleccionado',
        buttons: ['OK']
      });
  
      await alert.present();
    }

  }

}
