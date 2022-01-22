import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditarCatPage } from '../menu y categorias/modal-editar-cat/modal-editar-cat.page'
import { ModalVerCatPage } from '../menu y categorias/modal-ver-cat/modal-ver-cat.page';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-opciones-cat',
  templateUrl: './opciones-cat.page.html',
  styleUrls: ['./opciones-cat.page.scss'],
})
export class OpcionesCatPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "verCat"){
      const modal = await this.modalController.create({
        component: ModalVerCatPage,
        cssClass: 'modalVer',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editarCat"){
      const modal = await this.modalController.create({
        component: ModalEditarCatPage,
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
