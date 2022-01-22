import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalNotificacionesPushPage } from '../modal-notificaciones-push/modal-notificaciones-push.page';
import { ModalVerNotificacionPushPage } from '../modal-ver-notificacion-push/modal-ver-notificacion-push.page';
import { ModalEditarNotificacionesPushPage } from '../modal-editar-notificaciones-push/modal-editar-notificaciones-push.page';
@Component({
  selector: 'app-opciones-notificaciones-push',
  templateUrl: './opciones-notificaciones-push.page.html',
  styleUrls: ['./opciones-notificaciones-push.page.scss'],
})
export class OpcionesNotificacionesPushPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }
  
  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditarNotificacionesPushPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerNotificacionPushPage,
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
