import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { OpcionesUsuariosAppPage } from '../../opciones-usuarios-app/opciones-usuarios-app.page';
import { ModalNuevoUsuarioPage } from '../modal-nuevo-usuario/modal-nuevo-usuario.page';
import { ModalEditUsuarioPage } from '../modal-edit-usuario/modal-edit-usuario.page';
import { ModalVerUsuarioPage } from '../modal-ver-usuario/modal-ver-usuario.page';
import { ModalCargarCsvPage } from '../../modal-cargar-csv/modal-cargar-csv.page';
import { OpcionesItemUsuarioPage } from '../../opciones-item-usuario/opciones-item-usuario.page';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';

@Component({
  selector: 'app-usuariosapp',
  templateUrl: './usuariosapp.page.html',
  styleUrls: ['./usuariosapp.page.scss'],
})
export class UsuariosappPage implements OnInit {

  public slideOpts = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false
  };

  public usuariosApp: any = [];
  public buscador: string = "";

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    private strapiclient: StrapiClientService
  ) { }

  public ngOnInit(): void {
    this.cargarUsuarios()
  }

  public bloquearUsuario(usuario, index): void {
    if (this.usuariosApp[index].blocked) {
      this.usuariosApp[index].blocked = false
    } else {
      this.usuariosApp[index].blocked = true
    }
    this.strapiclient.actualizarDato("users", usuario.id, { blocked: this.usuariosApp[index].blocked })
      .subscribe(response => {
        if (response.hasOwnProperty("id")) {
          this.cargarUsuarios()
        }
      });
  }

  public cargarUsuarios(): void {
    this.strapiclient.obtenerDatosEspecificosDeTipo("users", "tipo", "CLIENTE").subscribe(response => {
      this.usuariosApp = response
    });
  }

  public async alert(tipo): Promise<any> {
    if (tipo === "borrar") {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Confirmación',
        message: 'Se borrará el elemento seleccionado',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  public async ver(usuario): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalVerUsuarioPage,
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

  public async modal(tipo): Promise<any> {
    if (tipo == "nuevo") {
      const modal = await this.modalController.create({
        component: ModalNuevoUsuarioPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if (tipo == "editar") {
      const modal = await this.modalController.create({
        component: ModalEditUsuarioPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if (tipo == "ver") {
      const modal = await this.modalController.create({
        component: ModalVerUsuarioPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if (tipo == "csv") {
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

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

 public  async opcionesRes(ev: any, tipo): Promise<any> {
    if (tipo === "opcionesItem") {
      const popover = await this.popoverController.create({
        component: OpcionesItemUsuarioPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if (tipo === "opcionesUsuarios") {
      const popover = await this.popoverController.create({
        component: OpcionesUsuariosAppPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
  }

  public async cerrarPop(): Promise<any> {
    const popover = await this.popoverController.dismiss();
  }
}
