import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController, NavParams } from '@ionic/angular';
import { ClikTools } from '../../Cliktools/cliktools';
import { ModalNuevaPromoPage } from '../modal-nueva-promo/modal-nueva-promo.page';
import { ModalVerPromoPage } from '../modal-ver-promo/modal-ver-promo.page';
import { StrapiClientService } from '../../servicios/strapiclient.service';

@Component({
  selector: 'app-opciones-promos',
  templateUrl: './opciones-promos.page.html',
  styleUrls: ['./opciones-promos.page.scss'],
})
export class OpcionesPromosPage implements OnInit {

  private promocion: any;

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    private navParams: NavParams,
    private strapi: StrapiClientService,
    private clikTools: ClikTools
  ) { }

  public ngOnInit(): void {
    this.promocion = this.navParams.get("promocion");
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
    modal.onDidDismiss().then(_ => {
      this.popoverController.dismiss();
    })
    return await modal.present();
  }

  public async ver(): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalVerPromoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        promocion: this.promocion
      }
    });
    return await modal.present();
  }

  public async editar(): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalNuevaPromoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        editar: true,
        promocion: this.promocion
      }
    });
    modal.onDidDismiss().then(_ => {
      this.popoverController.dismiss();
    })
    return await modal.present();
  }

  public async borrar(): Promise<any> {
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
            await this.strapi.eliminarDato("promocions", this.promocion.id)
              .toPromise().then(respone => {
                if (respone.hasOwnProperty("id")) {
                  this.clikTools.customToast("Promoción eliminada correctamente!", "primary");
                  this.popoverController.dismiss();
                }
              })
          }
        }
      ]
    })
    alert.present();
  }
}
