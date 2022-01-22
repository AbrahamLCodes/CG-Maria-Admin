import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { Router } from '@angular/router';

//declare var google;

@Component({
  selector: 'app-modal-nueva-sucursal',
  templateUrl: './modal-nueva-sucursal.page.html',
  styleUrls: ['./modal-nueva-sucursal.page.scss'],
})
export class ModalNuevaSucursalPage implements OnInit {

  public map: any = null;
  public files: File[] = [];

  public sucursalForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private utilerias: UtileriasService,
    public router: Router,
    private apiclient: ApiclientService
  ) {
    this.sucursalForm = formBuilder.group({
      activoOnline: [false, [Validators.required]],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      precio_minimo: ['', [Validators.required]],
      tipo_entrega: ['', [Validators.required]],
      tipo_cargo: ['', [Validators.required]],
      gastos_envio: ['', [Validators.required]],
      porcentaje_comision: ['', [Validators.required]],
      pago_efectivo: [false, [Validators.required]],
      pago_monedero: [false, [Validators.required]],
      pago_tarjeta: [false, [Validators.required]],
      iva: ["", [Validators.required]],
      metodos_pago: null,
    });
  }

  public ngAfterViewInit(): void { }

  public ngOnInit(): void {
    //this.loadInitMAp();
  }

  public async submitSucursal(): Promise<any> {

    if (this.sucursalForm.valid && this.files.length > 0) {
      this.sucursalForm.patchValue({

        /*
          La estructura de los métodos de pago en la base de datos
          se maneja desde aquí. Es una pésima práctica pero es lo que se 
          podía hacer con el poco tiempo del que se disponía :(

          Con snake_case es como se están manejando las propiedades del 
          JSON. Tanto aquí como la App del Cliente accederán a estas propiedades
          tal cual están escritas.

          ********** ESTANDAR ACTUAL: snake_case **********
        */

        metodos_pago: {
          "pago_efectivo": this.sucursalForm.value.pago_efectivo,
          "pago_monedero": this.sucursalForm.value.pago_monedero,
          "pago_tarjeta": this.sucursalForm.value.pago_tarjeta,
          "iva": (this.sucursalForm.value.iva / 100).toFixed(3)
        }
      });

      const formData = new FormData();
      formData.append('data', JSON.stringify(this.sucursalForm.value));
      formData.append('files.imagen', this.files[0]);

      await this.apiclient.guardarRecurso("sucursales", formData)
        .toPromise().then(_ => {
          this.cerrarModal();
          this.router.navigateByUrl("/sucursales-restaurante");
          window.location.reload();
        });
    } else {
      this.utilerias.showAcceptMessage("Formulario incorrecto", "Revisa que hallas llenado correctamente los campos");
    }
  }

  public verificarArchivo(): void {
    //Verificamos que el formato sea en jpeg
    if (this.files[0].type !== 'image/jpeg') {
      this.utilerias.showAcceptMessage("Archivo no valido", "Debes introducir un archivo en formato jpg o jpeg");
      this.files = [];
    } else {
      const imagenFile = this.files[0];
      const imagenSizeMb = imagenFile.size / 1024 / 1024;
      // Verificamos que pese menos de 2mb
      if (imagenSizeMb < 2) {
        var url = URL.createObjectURL(imagenFile);
        var img = new Image;
        img.src = url;
        img.onload = async () => {
          if (img.width !== 500 || img.height !== 500) {
            this.files = [];
            let alert: AlertController = new AlertController();
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
            });
            message.present();
          }
        };
      } else {
        this.files = [];
        this.utilerias.showAcceptMessage("Imágen demasiado pesada", "Debes introducir una imágen de menos de 2mb de peso");
      }
    }
  }

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public onSelect(event): void {
    this.files = [];
    this.files.push(...event.addedFiles);
    this.verificarArchivo();
  }

  public onRemove(event): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  /*
    En construcción
    public loadInitMAp(): void {
      const mapEle: HTMLElement = document.getElementById('map');
      const myLatLng = { lat:  31.6695836, lng: -106.4053205 };
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 10
      });
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
    }
  */
}