import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPage } from '../menu y categorias/menu/menu.page';
import { OpcionesConfiguracionesPage } from '../opciones-configuraciones/opciones-configuraciones.page';
import { SesionService } from '../servicios/sesion.service';
@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss'],
})
export class BotoneraComponent implements OnInit {

  constructor(
    public router: Router, 
    public popoverController: PopoverController, 
    public modalController: ModalController,
    private sesion: SesionService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.sesion.logout()
  }

  async menu() {
    const modal = await this.modalController.create({
      component: MenuPage,
      cssClass: 'modalMenu',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }

  async opcionesRes(ev: any, tipo) {
    if (tipo === "configuraciones") {
      const popover = await this.popoverController.create({
        component: OpcionesConfiguracionesPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
  }
}
