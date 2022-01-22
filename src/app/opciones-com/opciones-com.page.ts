import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalVerComPage } from '../menu y categorias/modal-ver-com/modal-ver-com.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-opciones-com',
  templateUrl: './opciones-com.page.html',
  styleUrls: ['./opciones-com.page.scss'],
})
export class OpcionesComPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "verCom"){
      const modal = await this.modalController.create({
        component: ModalVerComPage,
        cssClass: 'modalVer',
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
