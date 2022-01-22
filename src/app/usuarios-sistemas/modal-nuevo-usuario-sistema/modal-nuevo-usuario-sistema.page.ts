import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ClikForms } from 'src/app/Cliktools/clikforms';
import { ClikStrings } from 'src/app/Cliktools/clikstrings';
import { ClikTools } from 'src/app/Cliktools/cliktools';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-nuevo-usuario-sistema',
  templateUrl: './modal-nuevo-usuario-sistema.page.html',
  styleUrls: ['./modal-nuevo-usuario-sistema.page.scss'],
})

export class ModalNuevoUsuarioSistemaPage implements OnInit {

  public files: File[] = [];
  public usuarioForm: FormGroup
  public generatedPassword = ''

  public accesos: any = []
  public subaccesos: any = []
  public sucursales: any = []

  constructor(
    public modalController: ModalController,
    public utilerias: UtileriasService,
    public formBuilder: FormBuilder,
    private strapiclient: StrapiClientService,
    private cliktools: ClikTools,
    private clikForms: ClikForms,
    private clikStrings: ClikStrings
  ) {
    this.usuarioForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, Validators.required],
      tipo: [null, Validators.required],
      accesos: [null, Validators.required],
      subaccesos: [null, Validators.required],
      sucursal: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      wallet: 0
    })
  }

  ngOnInit() {
    this.cargarAccesos()
    this.cargarSubAccesos()
    this.cargarSucursales()
  }

  public submitUsuario() {
    if (this.usuarioForm.valid && this.files.length > 0) {
      this.strapiclient.crearUsuario(this.usuarioForm.value).subscribe((response: any) => {
        if (response.hasOwnProperty("user")) {
          this.strapiclient.crearUsuarioInfo({ usuario: response.user.id }, this.files[0]).subscribe((responseInfo: any) => {
            if (responseInfo.hasOwnProperty("id")) {
              this.cliktools.customToast("User created succesfully", "primary")
              this.modalController.dismiss({
                'dismissed': true
              }).then();
            }
          })
        }
      })
    } else {
      this.clikForms.presentInvalidEnToast()
    }
  }

  public cargarAccesos() {
    this.strapiclient.obtenerDatos("accesos").subscribe(response => {
      this.accesos = response
    })
  }

  public cargarSubAccesos() {
    this.strapiclient.obtenerDatos("subaccesos").subscribe(response => {
      this.subaccesos = response
    })
  }

  public cargarSucursales() {
    this.strapiclient.obtenerDatos("sucursales").subscribe(response => {
      this.sucursales = response
    })
  }

  public passwordPress() {
    this.generatedPassword = ''
  }

  public generarPassword() {
    const generatedPassword: string = this.randomString(10)
    this.generatedPassword = generatedPassword
    this.usuarioForm.patchValue({
      password: generatedPassword,
      confirmPassword: generatedPassword
    })
  }

  randomString(length) {
    return this.clikStrings.stringAleatorio(length)
  }

  async onSelect(event) {
    this.files = []
    this.files.push(...event.addedFiles);
    this.verificarArchivo()
  }

  verificarArchivo() {
    //Verificamos que el formato sea en jpeg
    if (this.files[0].type !== 'image/jpeg') {
      this.utilerias.showAcceptMessage("Archivo no valido", "Debes introducir un archivo en formato jpg o jpeg")
      this.files = []
    } else {
      const imagenFile = this.files[0]
      const imagenSizeMb = imagenFile.size / 1024 / 1024
      // Verificamos que pese menos de 2mb
      if (imagenSizeMb < 2) {
        var url = URL.createObjectURL(imagenFile);
        var img = new Image;
        img.src = url;
        img.onload = async () => {
          if (img.width !== 500 || img.height !== 500) {
            this.files = []
            let alert: AlertController = new AlertController()
            const message = await alert.create({
              header: "Tamaño de la imágen incorrecto",
              message: "El tamaño de la imágen debe ser exactamente de 500 x 500. Redimensiona su tamaño o elige otra foto",
              buttons: [
                {
                  text: "Aceptar",
                },
                {
                  text: "Redimensionar",
                  handler: () => window.open('https://www.iloveimg.com/es/redimensionar-imagen', '_blank').focus()
                },
              ]
            })
            message.present()
          }
        };
      } else {
        this.files = []
        this.utilerias.showAcceptMessage("Imágen demasiado pesada", "Debes introducir una imágen de menos de 2mb de peso")
      }
    }
  }

  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    }).then();
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
