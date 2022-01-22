import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-nuevo-cupon',
  templateUrl: './modal-nuevo-cupon.page.html',
  styleUrls: ['./modal-nuevo-cupon.page.scss'],
})

export class ModalNuevoCuponPage implements OnInit {

  files: File[] = [];
  public formCupon: FormGroup
  public producto:any = []

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService
  ) {
    this.formCupon = formBuilder.group({
      titulo: ['', [Validators.required]],
      lineamientos: [''],
      fechaInicio: ['', [Validators.required]],
      fechaExpiracion: ['', [Validators.required]],
      cantUsos: ['', [Validators.required]],
      porcentaje: ['false', [Validators.required]],
      cantidad: ['false',[Validators.required]],
      producto: ['false', [Validators.required]],
      allPlatform: ['false', [Validators.required]],
      androidPlatform: ['false', [Validators.required]],
      iosPlatform: ['false', [Validators.required]],
      pwaPlatform: ['false', [Validators.required]],
      sucursalPlatform: ['false', [Validators.required]],
      sucursales: [['']],
      crearQR: ['false', [Validators.required]],
      repetirAnual: ['false', [Validators.required]]
    })
   }

  ngAfterViewInit() {

  }

  ngOnInit() {

  }

  submitCupon(){
    if(this.formCupon.valid){

      const titulo = this.formCupon.value.titulo
      const lineamientos = this.formCupon.value.lineamientos
      const fechaInicio = this.formCupon.value.fechaInicio
      const fechaExpiracion = this.formCupon.value.fechaExpiracion
      const cantUsos = this.formCupon.value.cantUsos
      const porcentaje = this.formCupon.value.porcentaje 
      const cantidad = this.formCupon.value.cantidad 
      const producto = this.formCupon.value.producto 
      const allPlatform  = this.formCupon.value.allPlatform
      const androidPlatform = this.formCupon.value.androidPlatform
      const iosPlatform = this.formCupon.value.iosPlatform
      const pwaPlatform = this.formCupon.value.pwaPlatform
      const sucursalPlatform = this.formCupon.value.sucursalPlatform
      const sucursales = this.formCupon.value.sucursales
      const crearQR = this.formCupon.value.crearQR
      const repetirAnual = this.formCupon.value.repetirAnual

      console.log(titulo)
      console.log(lineamientos)
      console.log(fechaInicio)
      console.log(fechaExpiracion)
      console.log(cantUsos)
      console.log(porcentaje)
      console.log(cantidad)
      console.log(producto)
      console.log(allPlatform)
      console.log(androidPlatform)
      console.log(iosPlatform)
      console.log(pwaPlatform)
      console.log(sucursalPlatform)
      console.log(sucursales)
      console.log(crearQR)
      console.log(repetirAnual)

    } else {
      
    }
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
