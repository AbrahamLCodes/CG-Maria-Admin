import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, PopoverController } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import { ModalEditarSucursalPage } from '../modal-editar-sucursal/modal-editar-sucursal.page';
import { ModalNuevaSucursalPage } from '../modal-nueva-sucursal/modal-nueva-sucursal.page';
import { ModalVerSucursalPage } from '../modal-ver-sucursal/modal-ver-sucursal.page';
import { OpcionesRestaurantePage } from '../../opciones-restaurante/opciones-restaurante.page';
import { OpcionesSucursalesItemPage } from '../opciones-sucursales-item/opciones-sucursales-item.page';
import { OpcionesSucursalesPage } from '../opciones-sucursales/opciones-sucursales.page';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-sucursales-restaurante',
  templateUrl: './sucursales-restaurante.page.html',
  styleUrls: ['./sucursales-restaurante.page.scss'],
})

export class SucursalesRestaurantePage implements OnInit {

  public sucursales = []

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false
  };

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    private renderer: Renderer2,
    public modalController: ModalController,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService
  ) { }

  ngOnInit() {
    this.getSucursales()
  }

  async alertBorrarSucursal(sucursal: any) {
    const alert =  await this.alertController.create({
      header: "Eliminar Sucursal",
      message: "Se borrarán todos los datos relacionados a esta sucursal. ¿Seguro que quieres continuar?",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Eliminar",
          handler: () => {
            this.apiclient.eliminarUnRecurso("sucursales", sucursal.id).subscribe((res: any) => { 
              this.router.navigateByUrl("/sucursales-restaurante");
              window.location.reload();
            })
          }
        }
      ]
    })
    alert.present()
  }

  deleteSucursal(id_sucursal) {
    this.apiclient.destroySucursal(id_sucursal).subscribe((response: ApiResponse) => {
      if (response.success) {
        this.utilerias.showAcceptMessage("Operacion exitosa", "Se ha eliminado exitosamente la sucursal")
        this.getSucursales()
      } else {
        this.utilerias.showAcceptMessage("Operacion fallida", "No se ha podido eliminar la sucursal. Intenta mas tarde")
      }
    })
  }

  async editarSucursal(id_sucursal) {
    const modal = await this.modalController.create({
      component: ModalEditarSucursalPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_sucursal: id_sucursal
      }
    });
    return await modal.present();
  }

  async verSucursal(id_sucursal) {
    const modal = await this.modalController.create({
      component: ModalVerSucursalPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_sucursal: id_sucursal
      }
    });
    return await modal.present();
  }

  getSucursales() {
    this.apiclient.getRecurso("sucursales").subscribe((res: any) => {
      this.sucursales = res;
    })
  }

  async alert(tipo) {
    if (tipo === "borrar") {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Confirmación',
        message: 'Se borrará el elemento seleccionado',
        buttons: [
          {
            text: "Cancelar"
          },
          {
            text: "Aceptar",
            handler: (_ => console.log("Aaaa"))
          }
        ]
      });
      await alert.present();
    }

  }
  async modal(tipo) {
    if (tipo == "nuevo") {
      const modal = await this.modalController.create({
        component: ModalNuevaSucursalPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if (tipo == "editar") {
      const modal = await this.modalController.create({
        component: ModalEditarSucursalPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if (tipo == "ver") {
      const modal = await this.modalController.create({
        component: ModalVerSucursalPage,
        cssClass: 'modalNuevo',
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

  async opcionesRes(ev: any, tipo) {
    if (tipo === "opciones") {
      const popover = await this.popoverController.create({
        component: OpcionesSucursalesPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
    if (tipo === "opcionesItem") {
      const popover = await this.popoverController.create({
        component: OpcionesSucursalesItemPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
  }

  async cerrarPop() {
    const popover = await this.popoverController.dismiss();
  }
}
