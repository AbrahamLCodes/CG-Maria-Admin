import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import Sucursal from '../../interfaces/Sucursal';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-editar-cat',
  templateUrl: './modal-editar-cat.page.html',
  styleUrls: ['./modal-editar-cat.page.scss'],
})

export class ModalEditarCatPage implements OnInit {

  public id_categoria: any = ''
  public categoria: any = ''
  public categoriaSucursales: any = []
  public sucs = []

  public sucursales: any[] = [];
  public categoriaForm: FormGroup

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private navParams: NavParams,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService,
    private formBuilder: FormBuilder
  ) {
    this.categoriaForm = formBuilder.group({
      titulo: ['', [Validators.required]],
      sucursales: [[''], [Validators.required]]
    })
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.id_categoria = this.navParams.get('id_categoria')
    this.getSucursales()
    this.getCategoria(this.id_categoria)
  }

  submitCategoria() {
    if(this.categoriaForm.valid){
      this.apiclient.actualizarUnRecurso("categorias", this.id_categoria ,this.categoriaForm.value).subscribe(
        (res: any) => {
          window.location.reload();
        }
      );
    }  else {
      this.utilerias.showAcceptMessage("Formulario incorrecto", "Revisa que hallas llenado correctamente todos los campos")
    }
  }

  getCategoria(id_categoria) {
    this.apiclient.mostrarUnRecursoEspecifico("categorias", id_categoria).subscribe(
      (res: any) => {
        var sucursales = [];
        res.sucursales.forEach(element => {
          sucursales.push('' + element.id);
        });
        
        this.categoriaForm.patchValue({
          titulo: res.titulo,
          sucursales: sucursales
        });
      }
    );
  }

  getCategoriaSucursales(id_categoria) {
    this.apiclient.showProductoCategoriaSucursales(id_categoria)
      .subscribe((response: ApiResponse) => {
        if (response.success) {
          this.categoriaSucursales = response.result
          this.categoriaSucursales.forEach((suc) => {
            this.sucs.push(suc.id_sucursal + '')
          })
          this.getSucursales()
        }
      })
  }

  getSucursales() {
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
