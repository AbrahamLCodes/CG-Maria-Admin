import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { ModalCargarCsvPage } from '../../modal-cargar-csv/modal-cargar-csv.page';
import { ModalEditUsuariosSistemaPage } from '../modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.page';
import { ModalNuevoUsuarioSistemaPage } from '../modal-nuevo-usuario-sistema/modal-nuevo-usuario-sistema.page';
import { ModalVerUsuariosSistemaPage } from '../modal-ver-usuarios-sistema/modal-ver-usuarios-sistema.page';
import { OpcionesUsuariosSistemaItemPage } from '../opciones-usuarios-sistema-item/opciones-usuarios-sistema-item.page';
import { OpcionesUsuariosSistemaPage } from '../opciones-usuarios-sistema/opciones-usuarios-sistema.page';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';
import { ModalNuevoRepartidorSistemaPage } from '../modal-nuevo-repartidor-sistema/modal-nuevo-repartidor-sistema.page';
import { ModalEditRepartidorSistemaPage } from '../modal-edit-repartidor-sistema/modal-edit-repartidor-sistema.page';
import { ClikTools } from 'src/app/Cliktools/cliktools';

@Component({
  selector: 'app-usuarios-sistema',
  templateUrl: './usuarios-sistema.page.html',
  styleUrls: ['./usuarios-sistema.page.scss'],
})

export class UsuariosSistemaPage implements OnInit {

  public usuarios

  constructor(
    public popoverController: PopoverController,
    public router: Router,
    public modalController: ModalController,
    private clikTools: ClikTools,
    private strapiclient: StrapiClientService
  ) {

  }

  ngOnInit() {
    this.getUsuarios()
  }

  getUsuarios() {
    this.strapiclient.obtenerDatos("users").subscribe((response: any) => {
      this.usuarios = response.filter(usuario => usuario.tipo !== "CLIENTE")
    })
  }

  async editarUsuario(usuario) {
    const modal = await this.modalController.create({
      component: ModalEditUsuariosSistemaPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        usuario: usuario
      }
    });
    return await modal.present();
  }

  async editarRepartidor(usuario) {
    const modal = await this.modalController.create({
      component: ModalEditRepartidorSistemaPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        usuario: usuario
      }
    });
    return await modal.present();
  }

  async showUsuario(usuario) {
    const modal = await this.modalController.create({
      component: ModalVerUsuariosSistemaPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        usuario: usuario
      }
    });
    return await modal.present();
  }


  async modal(tipo) {
    let modal
    switch (tipo) {
      case "nuevo":
        modal = await this.modalController.create({
          component: ModalNuevoUsuarioSistemaPage,
          cssClass: 'modalNuevo',
          mode: "ios",
          swipeToClose: true,
          backdropDismiss: true,
        });
        break
      case "nuevoRepartidor":
        modal = await this.modalController.create({
          component: ModalNuevoRepartidorSistemaPage,
          cssClass: 'modalNuevo',
          mode: "ios",
          swipeToClose: true,
          backdropDismiss: true,
        });
        break
      case "editar":

        break
      case "ver":

        break
      case "csv":
        modal = await this.modalController.create({
          component: ModalCargarCsvPage,
          cssClass: 'modalCsv',
          mode: "ios",
          swipeToClose: true,
          backdropDismiss: true,
        });
        break
    }
    return await modal.present();
  }

  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async opcionesRes(ev: any, tipo) {
    let popover
    switch (tipo) {
      case "opcionesItem":
        popover = await this.popoverController.create({
          component: OpcionesUsuariosSistemaItemPage,
          cssClass: 'popOver',
          event: ev,
          mode: 'ios',
          translucent: true
        });
        break
      case "opcionesUsuarios":
        popover = await this.popoverController.create({
          component: OpcionesUsuariosSistemaPage,
          cssClass: 'popOver',
          event: ev,
          mode: 'ios',
          translucent: true
        });
        break
    }
    await popover.present();
  }

  async cerrarPop() {
    const popover = await this.popoverController.dismiss();
  }
}