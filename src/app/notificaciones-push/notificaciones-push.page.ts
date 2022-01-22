import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { ModalEditarNotificacionesPushPage } from '../modal-editar-notificaciones-push/modal-editar-notificaciones-push.page';
import { ModalNotificacionesPushPage } from '../modal-notificaciones-push/modal-notificaciones-push.page';
import { ModalVerNotificacionPushPage } from '../modal-ver-notificacion-push/modal-ver-notificacion-push.page';
import { OpcionesNotificacionesPushPage } from '../opciones-notificaciones-push/opciones-notificaciones-push.page';
@Component({
  selector: 'app-notificaciones-push',
  templateUrl: './notificaciones-push.page.html',
  styleUrls: ['./notificaciones-push.page.scss'],
})
export class NotificacionesPushPage implements OnInit {

  constructor(public popoverController: PopoverController,public alertController: AlertController, public router: Router,private renderer: Renderer2, public modalController: ModalController) { }

  ngOnInit() {
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
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNotificacionesPushPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
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

  async opcionesRes(ev: any,tipo) {
    if(tipo === "opcionesItem"){
      const popover = await this.popoverController.create({
        component: OpcionesNotificacionesPushPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }

  }
  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }
}
