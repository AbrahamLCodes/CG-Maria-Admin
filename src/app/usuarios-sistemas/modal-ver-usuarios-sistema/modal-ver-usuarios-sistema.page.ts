import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import { ModalEditUsuariosSistemaPage } from '../modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.page';
import { ModalEditarPage } from '../../menu y categorias/modal-editar/modal-editar.page';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';

@Component({
  selector: 'app-modal-ver-usuarios-sistema',
  templateUrl: './modal-ver-usuarios-sistema.page.html',
  styleUrls: ['./modal-ver-usuarios-sistema.page.scss'],
})

export class ModalVerUsuariosSistemaPage implements OnInit {

  public usuario: any
  public usuarioInfo: any

  public accesos = []
  public accesosString = ''
  public subaccessos = []
  public subaccesosString = ''
  public imageToShow: any
  public imagenRecuperada = false

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private strapiclient: StrapiClientService
  ) {
  }

  ngOnInit() {
    this.usuario = this.navParams.get("usuario")
    this.cargarUsuarioInfo()
  }

  cargarUsuarioInfo() {
    this.strapiclient.obtenerDatosEspecificosDeTipo("usuarioinfo", "usuario", this.usuario.id).subscribe((response: any) => {
      this.usuarioInfo = response[0]
    })
  }

  public getImagen() {
    let imagen;
    imagen = `http://localhost:1337${this.usuarioInfo.img.url}`;    
    return imagen;
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
      this.imagenRecuperada = true
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async goTo(tipo) {
    this.cerrarModal();
    if (tipo == "editar") {
      const modal = await this.modalController.create({
        component: ModalEditUsuariosSistemaPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
  }
}