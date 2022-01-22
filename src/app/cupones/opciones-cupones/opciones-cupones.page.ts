import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ModalEditCuponPage } from '../modal-edit-cupon/modal-edit-cupon.page';
import { ModalNuevoCuponPage } from '../modal-nuevo-cupon/modal-nuevo-cupon.page';
import { ModalVerCuponPage } from '../modal-ver-cupon/modal-ver-cupon.page';
import { OpcionesNotificacionesPushPage } from '../../opciones-notificaciones-push/opciones-notificaciones-push.page';

@Component({
  selector: 'app-opciones-cupones',
  templateUrl: './opciones-cupones.page.html',
  styleUrls: ['./opciones-cupones.page.scss'],
})
export class OpcionesCuponesPage implements OnInit {

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
        component: ModalNuevoCuponPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditCuponPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
   
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerCuponPage,
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
