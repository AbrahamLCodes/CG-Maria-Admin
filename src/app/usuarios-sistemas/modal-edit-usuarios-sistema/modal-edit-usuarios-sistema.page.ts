import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ClikForms } from 'src/app/Cliktools/clikforms';
import { ClikStrings } from 'src/app/Cliktools/clikstrings';
import { ClikTools } from 'src/app/Cliktools/cliktools';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';
import ApiResponse from '../../interfaces/ApiResponse';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-edit-usuarios-sistema',
  templateUrl: './modal-edit-usuarios-sistema.page.html',
  styleUrls: ['./modal-edit-usuarios-sistema.page.scss'],
})
export class ModalEditUsuariosSistemaPage implements OnInit {

  files: File[] = [];

  public usuario: any
  public usuarioInfo: any

  public accesos: any = []
  public subaccesos: any = []
  public sucursales: any = []

  public imageToShow: any
  public imagenRecuperada = false
  public generatedPassword = ''

  public selectedRol = ''
  public selectedAccesos = []
  public selectedSubAccesos = []

  public usuarioForm: FormGroup

  public id_usuario = ''

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private utilerias: UtileriasService,
    private apiclient: ApiclientService,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private clikTools: ClikTools,
    private clikForms: ClikForms,
    private clikStrings: ClikStrings,
    private strapiclient: StrapiClientService
  ) {
    this.usuarioForm = formBuilder.group({
      tipo: [null, Validators.required],
      accesos: [null, Validators.required],
      subaccesos: [null, Validators.required],
      sucursal: [0, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      blocked: false
    })
  }

  ngOnInit() {
    this.usuario = this.navParams.get("usuario")
    this.cargarAccesos()
    this.cargarUsuarioInfo()
  }

  submitEdit() {
    if (this.usuarioForm.valid) {
      this.strapiclient.actualizarDato("users", this.usuario.id, this.usuarioForm.value)
        .subscribe(response => {
          if (response.hasOwnProperty("id")) {
            if (this.files.length > 0) {
              this.strapiclient.actualizarUsuarioInfo(this.usuarioInfo.id, this.files[0])
                .subscribe(responseInfo => {
                  if (responseInfo.hasOwnProperty("id")) {
                    this.clikTools.customToast("User updated succesfully!", "primary")
                    this.modalController.dismiss({
                      'dismissed': true
                    }).then(_ => window.location.reload())
                  }
                })
            } else {
              this.clikTools.customToast("User updated succesfully!", "primary")
              this.modalController.dismiss({
                'dismissed': true
              }).then(_ => window.location.reload())
            }
          }
        })
    } else {
      this.utilerias.showAcceptMessage("Formulario incorrecto", "Verifica que hallas introducido bien los campos")
    }
  }

  public cargarAccesos() {
    this.strapiclient.obtenerDatos("accesos").subscribe(response => {
      this.accesos = response
      this.cargarSubAccesos()
    })
  }

  public cargarSubAccesos() {
    this.strapiclient.obtenerDatos("subaccesos").subscribe(response => {
      this.subaccesos = response
      this.cargarSucursales()
    })
  }

  public cargarSucursales() {
    this.strapiclient.obtenerDatos("sucursales").subscribe(response => {
      this.sucursales = response
      
      const accesosForm = []
      const subaccesoForm = []

      this.usuario.accesos.forEach(acceso => {
        accesosForm.push(acceso.id)
      })
      this.usuario.subaccesos.forEach(subacceso => {
        subaccesoForm.push(subacceso.id)
      })

      this.usuarioForm.patchValue({
        tipo: this.usuario.tipo,
        accesos: accesosForm,
        subaccesos: subaccesoForm,
        sucursal: this.usuario.sucursal.id,
        username: this.usuario.username,
        email: this.usuario.email
      })
      
    })
  }

  public cargarUsuarioInfo() {
    this.strapiclient.obtenerDatosEspecificosDeTipo("usuarioinfo", "usuario", this.usuario.id).subscribe((response: any) => {
      this.usuarioInfo = response[0]
    })
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

  passwordPress() {
    this.generatedPassword = ''
  }

  generarPassword() {
    const generatedPassword: string = this.clikStrings.stringAleatorio(10)
    this.generatedPassword = generatedPassword
    this.usuarioForm.patchValue({
      password: generatedPassword,
      confirmPassword: generatedPassword
    })
  }

  public getImagen() {
    let imagen;
    imagen = `http://localhost:1337${this.usuarioInfo.img.url}`;
    return imagen;
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
    }).then()
  }

  async onSelect(event) {
    this.files = []
    this.files.push(...event.addedFiles);
    this.verificarArchivo()
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
