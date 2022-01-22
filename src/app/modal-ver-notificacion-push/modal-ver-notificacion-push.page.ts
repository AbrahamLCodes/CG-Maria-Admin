import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditarNotificacionesPushPage } from '../modal-editar-notificaciones-push/modal-editar-notificaciones-push.page';
@Component({
  selector: 'app-modal-ver-notificacion-push',
  templateUrl: './modal-ver-notificacion-push.page.html',
  styleUrls: ['./modal-ver-notificacion-push.page.scss'],
})
export class ModalVerNotificacionPushPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  } 
  
  async goTo(tipo) {
    this.cerrarModal();
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditarNotificacionesPushPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }

}
