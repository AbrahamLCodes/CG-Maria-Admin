import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { OpcionesRestaurantePage } from '../opciones-restaurante/opciones-restaurante.page';
import { OpcionesReportesPage } from '../opciones-reportes/opciones-reportes.page';
import { OpcionesUsuariosAppPage } from '../opciones-usuarios-app/opciones-usuarios-app.page';
import { Router } from '@angular/router';
import { FidelizacionOpcionesPage } from '../fidelizacion-opciones/fidelizacion-opciones.page';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public quejas: any = [];
  public quejasNoLeidas: number = 0;

  constructor(
    public router: Router,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public modalController: ModalController,
    public app: AppService
  ) { }

  public ngOnInit(): void { }

  public async ionViewDidEnter(): Promise<any> {
    this.quejasNoLeidas = 0;
    this.quejas = await this.app.quejas();
    this.quejas.forEach((queja: any) => {
      if (!queja.visto) {
        this.quejasNoLeidas++;
      }
    })
  }

  public async caja(estatus): Promise<any> {
    if (estatus == "iniciar") {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Abrir caja',
        message: 'Escribe la cantidad de dinero en la caja',
        inputs: [
          {
            name: 'name1',
            type: 'number',
            placeholder: 'cantidad'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Ingresar',
            role: 'accept',
            handler: () => this.router.navigate(['/cobrar'])
          }
        ]
      });
      await alert.present();
    }
  }


  public async opcionesRes(ev: any, tipo): Promise<any> {
    if (tipo === "restaurante") {
      const popover = await this.popoverController.create({
        component: OpcionesRestaurantePage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if (tipo === "fidelizacion") {
      const popover = await this.popoverController.create({
        component: FidelizacionOpcionesPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if (tipo === "reportes") {
      const popover = await this.popoverController.create({
        component: OpcionesReportesPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if (tipo === "usuariosApp") {
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
