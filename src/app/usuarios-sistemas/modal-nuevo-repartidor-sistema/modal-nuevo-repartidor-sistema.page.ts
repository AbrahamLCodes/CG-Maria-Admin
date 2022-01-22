import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ClikForms } from 'src/app/Cliktools/clikforms';
import { ClikStrings } from 'src/app/Cliktools/clikstrings';
import { ClikTools } from 'src/app/Cliktools/cliktools';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nuevo-repartidor-sistema',
  templateUrl: './modal-nuevo-repartidor-sistema.page.html',
  styleUrls: ['./modal-nuevo-repartidor-sistema.page.scss'],
})
export class ModalNuevoRepartidorSistemaPage implements OnInit {


  public files: File[] = [];
  public conducir: File[] = [];
  public seguro: File[] = [];
  public usuarioForm: FormGroup;
  public repartidorForm: FormGroup;
  public generatedPassword = '';

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
    private clikStrings: ClikStrings,
    public toastController: ToastController
  ) {
    this.usuarioForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, Validators.required],
      tipo: ["REPARTIDOR", Validators.required],
      accesos: null,
      subaccesos: null,
      sucursal: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      wallet: 0,
      telefono: [null, Validators.required],
    })

    this.repartidorForm = formBuilder.group({
      modelo: [null, Validators.required],
      seguro: [null, Validators.required],
      telefono: null,
    })
  }

  ngOnInit() {
    this.cargarAccesos()
    this.cargarSubAccesos()
    this.cargarSucursales()
  }

  public async submitUsuario() {

    if (this.usuarioForm.valid && this.repartidorForm.valid) {
      if(this.files.length > 0 && this.conducir.length > 0 && this.seguro.length > 0){

        var userForm = new FormData();
        userForm.append("data", this.usuarioForm.value);
        userForm.append("files.img", this.files[0]);
        this.strapiclient.crearUsuario(this.usuarioForm.value).subscribe((response: any) => {
          if (response.hasOwnProperty("user")) {
            this.strapiclient.crearUsuarioInfo({ usuario: response.user.id }, this.files[0]).subscribe(async (responseInfo: any) => {
              // if (responseInfo.hasOwnProperty("id")) {
              //   this.cliktools.customToast("User created succesfully", "primary")
              //   this.modalController.dismiss({
              //     'dismissed': true
              //   }).then();
              // }
              this.repartidorForm.patchValue({
                telefono: this.usuarioForm.value.telefono,
                user: response.user.id
              });
              var repartidorForm = new FormData();
              repartidorForm.append("data",  JSON.stringify(this.repartidorForm.value));
              repartidorForm.append("files.licencia", this.conducir[0]);
              repartidorForm.append("files.seguro_foto", this.seguro[0]);
  
              await this.strapiclient.guardarRecurso("repartidores", repartidorForm).toPromise().then(
                (res: any) => {
                }
              );
            })
          }
        })
      }else{
        const toast = await this.toastController.create({
          message: 'check that you have uploaded all the photos',
          duration: 2000
        });
        toast.present();
      } 
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

  async onSelectConducir(event) {
    this.conducir = []
    this.conducir.push(...event.addedFiles);
  }

  async onSelectSeguro(event) {
    this.seguro = []
    this.seguro.push(...event.addedFiles);
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

  verificarArchivoConducir() {
    //Verificamos que el formato sea en jpeg
    if (this.conducir[0].type !== 'image/jpeg') {
      this.utilerias.showAcceptMessage("Archivo no valido", "Debes introducir un archivo en formato jpg o jpeg")
      this.conducir = []
    } else {
      const imagenFile = this.conducir[0]
      const imagenSizeMb = imagenFile.size / 1024 / 1024
      // Verificamos que pese menos de 2mb
      if (imagenSizeMb < 2) {
        var url = URL.createObjectURL(imagenFile);
        var img = new Image;
        img.src = url;
        img.onload = async () => {
          if (img.width !== 500 || img.height !== 500) {
            this.conducir = []
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
        this.conducir = []
        this.utilerias.showAcceptMessage("Imágen demasiado pesada", "Debes introducir una imágen de menos de 2mb de peso")
      }
    }
  }

  verificarArchivoSeguro() {
    //Verificamos que el formato sea en jpeg
    if (this.seguro[0].type !== 'image/jpeg') {
      this.utilerias.showAcceptMessage("Archivo no valido", "Debes introducir un archivo en formato jpg o jpeg")
      this.seguro = []
    } else {
      const imagenFile = this.seguro[0]
      const imagenSizeMb = imagenFile.size / 1024 / 1024
      // Verificamos que pese menos de 2mb
      if (imagenSizeMb < 2) {
        var url = URL.createObjectURL(imagenFile);
        var img = new Image;
        img.src = url;
        img.onload = async () => {
          if (img.width !== 500 || img.height !== 500) {
            this.seguro = []
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
        this.seguro = []
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
