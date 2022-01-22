import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ClikTools } from '../../Cliktools/cliktools';
import { ModalNuevaPromoPage } from '../modal-nueva-promo/modal-nueva-promo.page';
import { ModalVerPromoPage } from '../modal-ver-promo/modal-ver-promo.page';
import { OpcionesPromosPage } from '../opciones-promos/opciones-promos.page';
import { AppService } from '../../services/app.service';
import { StrapiClientService } from '../../servicios/strapiclient.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  public buscador: string = "";
  public promociones: any;

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    private app: AppService,
    private strapi: StrapiClientService,
    private clikTools: ClikTools
  ) { }

  public ngOnInit(): void { }

  public async ionViewDidEnter(): Promise<any> {
    this.promociones = await this.app.promociones();
  }

  public async nuevo(): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalNuevaPromoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        editar: false
      }
    });
    modal.onDidDismiss().then(async _ => {
      this.promociones = await this.app.promociones();
    });
    return await modal.present();
  }

  public async ver(promocion): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalVerPromoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        promocion
      }
    });
    return await modal.present();
  }

  public async editar(promocion): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalNuevaPromoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        editar: true,
        promocion
      }
    });
    modal.onDidDismiss().then(async _ => {
      this.promociones = await this.app.promociones();
    });
    return await modal.present();
  }

  public async borrar(promocion): Promise<any> {
    const alert = await this.alertController.create({
      header: "Eliminar promoción",
      message: "¿Seguro que quiere continuar con la acción?",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Aceptar",
          handler: async () => {
            this.strapi.eliminarPromo(promocion)
              .toPromise().then(async response => {
                if (response.hasOwnProperty("id")) {
                  this.clikTools.customToast("Promoción eliminada correctamente!", "primary");
                  this.promociones = await this.app.promociones();
                }
              });
          }
        }
      ]
    })
    alert.present();
  }

  public async opcionesRes(ev: any, tipo: any, promocion: any): Promise<any> {
    if (tipo === "opcionesItem") {
      const popover = await this.popoverController.create({
        component: OpcionesPromosPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true,
        componentProps: {
          promocion
        }
      });
      popover.onDidDismiss().then(async _ => {
        this.promociones = await this.app.promociones();
      })
      await popover.present();
    }
  }
}
