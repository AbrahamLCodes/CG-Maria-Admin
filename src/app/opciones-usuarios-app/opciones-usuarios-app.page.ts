import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalNuevoUsuarioPage } from '../usuarios-app/modal-nuevo-usuario/modal-nuevo-usuario.page';
import { ModalEditUsuarioPage } from '../usuarios-app/modal-edit-usuario/modal-edit-usuario.page';
import { ModalVerUsuarioPage } from '../usuarios-app/modal-ver-usuario/modal-ver-usuario.page';
import { ModalCargarCsvPage } from '../modal-cargar-csv/modal-cargar-csv.page';
import { OpcionesItemUsuarioPage } from '../opciones-item-usuario/opciones-item-usuario.page';
@Component({
  selector: 'app-opciones-usuarios-app',
  templateUrl: './opciones-usuarios-app.page.html',
  styleUrls: ['./opciones-usuarios-app.page.scss'],
})
export class OpcionesUsuariosAppPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController
    ) {}

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevoUsuarioPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditUsuarioPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerUsuarioPage,
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
  async opcionesRes(ev: any,tipo) {
    if(tipo === "opcionesItem"){
      const popover = await this.popoverController.create({
        component: OpcionesItemUsuarioPage,
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
