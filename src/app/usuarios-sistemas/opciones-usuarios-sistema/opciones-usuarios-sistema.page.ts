import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ModalCargarCsvPage } from '../../modal-cargar-csv/modal-cargar-csv.page';
import { ModalEditUsuariosSistemaPage } from '../modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.page';
import { ModalNuevoUsuarioSistemaPage } from '../modal-nuevo-usuario-sistema/modal-nuevo-usuario-sistema.page';
import { ModalVerUsuariosSistemaPage } from '../modal-ver-usuarios-sistema/modal-ver-usuarios-sistema.page';
import { OpcionesUsuariosSistemaItemPage } from '../opciones-usuarios-sistema-item/opciones-usuarios-sistema-item.page';

@Component({
  selector: 'app-opciones-usuarios-sistema',
  templateUrl: './opciones-usuarios-sistema.page.html',
  styleUrls: ['./opciones-usuarios-sistema.page.scss'],
})
export class OpcionesUsuariosSistemaPage implements OnInit {


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
        component: ModalNuevoUsuarioSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditUsuariosSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerUsuariosSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "csv"){
      const modal = await this.modalController.create({
        component: ModalCargarCsvPage,
        cssClass: 'modalCsv',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
   
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async opcionesRes(ev: any,tipo) {
    if(tipo === "opcionesItem"){
      const popover = await this.popoverController.create({
        component: OpcionesUsuariosSistemaItemPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if(tipo === "opcionesUsuarios"){
      const popover = await this.popoverController.create({
        component: OpcionesUsuariosSistemaPage,
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
