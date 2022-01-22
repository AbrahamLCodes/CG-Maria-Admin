import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { OpcionesMenuPage } from '../../opciones-menu/opciones-menu.page';
import { OpcionesCrudPage } from '../../opciones-crud/opciones-crud.page';
import { OpcionesCatPage } from '../../opciones-cat/opciones-cat.page';
import { OpcionesComPage } from '../../opciones-com/opciones-com.page';

import { OpcionesCategoriaPage } from '../../opciones-categoria/opciones-categoria.page';
import { OpcionesComplementosPage } from '../../opciones-complementos/opciones-complementos.page';

import { ModalEditarPage } from '../modal-editar/modal-editar.page';
import { ModalVerProductoPage } from '../modal-ver-producto/modal-ver-producto.page';
import { ModalCrearNuevoPage } from '../modal-crear-nuevo/modal-crear-nuevo.page';
import { ModalCartaPage } from '../modal-carta/modal-carta.page';
import { ModalCargarCsvPage } from '../../modal-cargar-csv/modal-cargar-csv.page';

import { ModalEditarCatPage } from '../modal-editar-cat/modal-editar-cat.page';
import { ModalVerCatPage } from '../modal-ver-cat/modal-ver-cat.page';
import { ModalNuevaCatPage } from '../modal-nueva-cat/modal-nueva-cat.page';

import { ModalNuevoComPage } from '../modal-nuevo-com/modal-nuevo-com.page';
import { ModalEditarComPage } from '../modal-editar-com/modal-editar-com.page'
import { ModalVerComPage } from '../modal-ver-com/modal-ver-com.page';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { ApiclientService } from '../../providers/apiclient.service';
import ApiResponse from '../../interfaces/ApiResponse';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChild('slider', { read: IonSlides }) slider: IonSlides;
  @ViewChild("slide0") Slide0: ElementRef;
  @ViewChild("slide1") Slide1: ElementRef;
  @ViewChild("slide2") Slide2: ElementRef;

  public slideOpts = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false
  };

  public categorias: any
  public complementos: any
  public sucursales: any[];
  public productos: any[];
  public buscador = ""
  public buscadorCategorias = ""
  public buscadorOpcionales = ""

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    private renderer: Renderer2,
    public modalController: ModalController,
    private utilerias: UtileriasService,
    private apiclient: ApiclientService,
  ) {}

  ngOnInit() {
    this.getCategorias()
    this.getComplementos()
    this.getProductos()
  }

  async borrarProducto(id: any){
    const alert =  await this.alertController.create({
      header: "Delect Product",
      message: "Se borrarán todos los datos relacionados a este producto. ¿Seguro que quieres continuar?",
      buttons: [
        {
          text: "Cencel"
        },
        {
          text: "Delete",
          handler: () => {
            this.apiclient.eliminarUnRecurso("productos", id).subscribe((res: any) => { 
              window.location.reload();
            })
          }
        }
      ]
    })
    alert.present()
  }
  async editarProducto(id: any){
    const modal = await this.modalController.create({
      component: ModalEditarPage,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id: id
      }
    });
    return await modal.present();
  }
  verProducto(id:any){

  }
  async borrarCategoria(id_categoria) {
    let alert = await this.alertController.create({
      header: "Eliminar Categoria",
      message: "Seguro que quiere eliminar la categoria",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Aceptar",
          handler: () => {
            this.apiclient.eliminarUnRecurso("categorias", id_categoria).subscribe(
              (res: any) => {
                window.location.reload();
              }
            );
          }
        }
      ]
    })

    alert.present()
  }

  eliminarCat(id_categoria) {
    this.apiclient.destroyproductocategoria(id_categoria).subscribe((response: ApiResponse) => {
      if (response.success) {
        this.utilerias.showAcceptMessage("Operacion exitosa", "Se ha eliminado la categoria exitosamente")
        this.getCategorias()
      } else {
        this.utilerias.showAcceptMessage("Operacion fallida", "No se ha podido eliminar la categoria. Intenta mas tarde")
      }
    })
  }

  async verCategoria(id_categoria) {
    const modal = await this.modalController.create({
      component: ModalVerCatPage,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_categoria: id_categoria
      }
    });
    return await modal.present();
  }

  async editarCategoria(id_categoria) {
    const modal = await this.modalController.create({
      component: ModalEditarCatPage,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_categoria: id_categoria
      }
    });
    return await modal.present();
  }

  async verComplemento(id_complemento) {
    const modal = await this.modalController.create({
      component: ModalVerComPage,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_complemento: id_complemento
      }
    });
    return await modal.present();
  }

  async updateComplemento(id_complemento) {
    const modal = await this.modalController.create({
      component: ModalEditarComPage,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        id_complemento: id_complemento
      }
    });
    return await modal.present();
  }

  async borrarComplemento(id_complemento) {
    let alert = await this.alertController.create({
      header: "Eliminar Complemento",
      message: "Seguro que quiere eliminar el complemento",
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Aceptar",
          handler: () => {
            this.apiclient.eliminarUnRecurso("tipos", id_complemento).subscribe(
              (res: any) => {
                this.router.navigateByUrl("/menu");
                window.location.reload();
              }
            );
          }
        }
      ]
    })

    alert.present()
  }

  eliminarComplemento(id_complemento) {
    this.apiclient.destroyComplemento(id_complemento).subscribe((response: ApiResponse) => {
      if (response.success) {
        this.utilerias.showAcceptMessage("Operacion exitosa", "Se ha eliminado el complemento exitosamente")
        this.getComplementos()
      } else {
        this.utilerias.showAcceptMessage("Operacion fallida", "No se ha podido eliminar el complemento. Intenta mas tarde")
      }
    })
  }

  getCategorias() {
    this.apiclient.getRecurso("categorias").subscribe((response: any) => {
      this.categorias = response;
    })
  }

  getComplementos() {
    this.apiclient.getRecurso("tipos").subscribe((response: any) => {
        this.complementos = response
    })
  }

  getProductos() {
    this.apiclient.getRecurso("productos").subscribe((response: any) => {
        this.productos = response
    })
  }
  
  slideTo(slideNumber) {
    this.slider.slideTo(slideNumber);
    switch (slideNumber) {
      case "0":
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', ' var(--color-secundario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', ' --color-secundario');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', ' --color-secundario');
        break
      case "1":
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', ' var(--color-secundario)');
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', ' --color-secundario');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', ' --color-secundario');
        break
      case "2":
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', '--color-primario');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', ' --color-secundario');
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', ' --color-secundario');
        break
    }
  }

  slideSwipe() {
    this.slider.getActiveIndex().then((index: number) => {
      switch (index) {
        case 0:
          this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
          break
        case 1:
          this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
          break
        case 2:
          this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
          break
      }
    });
  }
  async alert(tipo) {
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

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async modal(tipo) {

    let component: any

    switch (tipo) {
      case "nuevo":
        component = ModalCrearNuevoPage
        break;

      case "carta":
        component = ModalCartaPage
        break

      case "csv":
        component = ModalCargarCsvPage
        break

      case "ver":
        component = ModalVerProductoPage
        break

      case "editar":
        component = ModalEditarPage
        break

      case "nuevoCat":
        component = ModalNuevaCatPage
        break

      case "editCat":
        component = ModalEditarCatPage
        break

      case "verCat":
        component = ModalVerCatPage
        break

      case "nuevoCom":
        component = ModalNuevoComPage
        break

      case "editCom":
        component = ModalEditarComPage
        break

      case "verCom":
        component = ModalVerComPage
        break
    }

    const modal = await this.modalController.create({
      component: component,
      cssClass: 'modalEditar',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
    });
    
    this.ngOnInit();
    return await modal.present();
  }

  async opcionesRes(ev: any, tipo) {

    let component: any

    switch (tipo) {
      case "opcionesCarga":
        component = OpcionesMenuPage
        break
      case "opcionesItem":
        component = OpcionesCrudPage
        break
      case "opcCategoria":
        component = OpcionesCategoriaPage
        break
      case "opcionesCat":
        component = OpcionesCatPage
        break
      case "opcionesCom":
        component = OpcionesComPage
        break
      case "opcionesComplementos":
        component = OpcionesComplementosPage
        break
    }

    const popover = await this.popoverController.create({
      component: component,
      cssClass: 'popOver',
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
  }

  async cerrarPop() {
    const popover = await this.popoverController.dismiss();
  }
}