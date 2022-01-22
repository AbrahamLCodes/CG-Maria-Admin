import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import Sucursal from '../../interfaces/Sucursal';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-nueva-cat',
  templateUrl: './modal-nueva-cat.page.html',
  styleUrls: ['./modal-nueva-cat.page.scss'],
})

export class ModalNuevaCatPage implements OnInit {

  public sucursales: any[] = [];
  public categoriaForm: FormGroup

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private apiclient: ApiclientService,
    private formBuilder: FormBuilder,
    private utilerias: UtileriasService
  ) {
    this.categoriaForm = formBuilder.group({
      titulo: ['', [Validators.required]],
      sucursales: [[null], [Validators.required]]
    })
   }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.getSucursales()
  }

  submitCategoria(){
    if(this.categoriaForm.valid){
      this.apiclient.guardarRecurso("categorias", this.categoriaForm.value).subscribe(
        (res: any) => {
          window.location.reload();
        }
      );
    }  else {
      this.utilerias.showAcceptMessage("Formulario incorrecto", "Revisa que hallas llenado correctamente todos los campos")
    }
  }

  getSucursales(){
    this.apiclient.getRecurso("sucursales").subscribe((response: any) => {
      this.sucursales = response;
    })
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}