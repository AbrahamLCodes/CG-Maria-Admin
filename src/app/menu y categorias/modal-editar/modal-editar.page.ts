import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonSlides, ModalController, NavParams } from '@ionic/angular';
import { ClikTools } from '../../Cliktools/cliktools';
import ApiResponse from '../../interfaces/ApiResponse';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';


@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
})
export class ModalEditarPage implements OnInit {
  @ViewChild('modalSlider1', { read: IonSlides }) sliderModal1: IonSlides;
  @ViewChild("modalSlide0") SlideM0: ElementRef;
  @ViewChild("modalSlide1") SlideM1: ElementRef;
  @ViewChild("modalSlide2") SlideM2: ElementRef;

  public id: any = ''
  files: any[] = [];
  public sucursales: any[];
  public complementos = [];
  public categorias = [];

  public detalleForm: FormGroup
  public sizeForm: FormGroup
  public opcionesForm: FormGroup
  public detallesForm: FormGroup

  public sizes:any[] = []
  public tipos: any[] = []

  public product: any;
  public slideOpts1 = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false,
    autoHeight: true
  };

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private navParams: NavParams,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService,
    private formBuilder: FormBuilder,
    private clikTools: ClikTools
  ) {
    this.detalleForm = formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descuento: [''],
      personalizable: [false],
      soloEnComedor: [false, [Validators.required]],
      sucursales: [[''], [Validators.required]],
      categorias: [[''], [Validators.required]],
      sizes: null,
      tipos: null,
      recomendado:[false, [Validators.required]],
      promocion: [false, [Validators.required]],
      popular: [false, [Validators.required]],
      nuevo: [false, [Validators.required]],
      vegano: [false, [Validators.required]],
    })

    this.sizeForm = formBuilder.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    })
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.id = this.navParams.get('id')
    this.getSucursales()
    this.getComplementos()
    this.getCategorias()

    this.getProducto(this.id)
  }

  submitProducto() {
    if (this.detalleForm.valid) {
      this.detalleForm.patchValue({
        sizes: this.sizes,
      });

      const formData = new FormData();
      formData.append('data', JSON.stringify(this.detalleForm.value));
      formData.append('files.imagen', this.files[0]);

      this.apiclient.actualizarUnRecurso("productos", this.id,formData).subscribe(
        (req: any) => {
          this.cerrarModal();
          window.location.reload();
        }
      )
    } else {
      this.utilerias.showAcceptMessage("Formularios incorrectos", "Revisa que hallas llenado correctament todos los formularios")
    }
  }

  getProducto(id) {
    this.apiclient.mostrarUnRecursoEspecifico("productos", id).subscribe(
      async (res: any) => {
        this.product = res;
        var sucursales = [];
        res.sucursales.forEach(element => {
          sucursales.push('' + element.id);
        });
        
        var categorias = [];
        res.categorias.forEach(element => {
          categorias.push('' + element.id);
        });
        
        var tipos = [];
        res.tipos.forEach(element => {
          tipos.push('' + element.id);
        });

        this.detalleForm.patchValue({
          titulo: res.titulo,
          descripcion: res.descripcion,
          precio: res.precio,
          descuento: res.descuento,
          personalizable: res.personalizable,
          soloEnComedor: res.soloEnComedor,
          sucursales: sucursales,
          categorias: categorias,
          tipos: tipos,
          recomendado: res.recomendado,
          promocion: res.promocion,
          popular: res.popular,
          nuevo: res.nuevo,
          vegano: res.vegano,
        });
        
        this.files[0] = await this.clikTools.ImgToFile(res.imagen);

        if(Object.keys(res.sizes).length > 2){
          this.sizes = res.sizes;
        }
        this.tipos = tipos;
      }
    );
  }

  getSucursales() {
    this.apiclient.getRecurso("sucursales").subscribe((response: any) => {
      this.sucursales = response;
    })
  }

  getComplementos(){
    this.apiclient.getRecurso("tipos").subscribe((response: any) => {
      this.complementos = response;
    });
  }

  getCategorias(){
    this.apiclient.getRecurso("categorias").subscribe((response: any) => {
      this.categorias = response;
    });
  }

  agregarSize(){
    if(this.sizeForm.valid){
      const nombre = this.sizeForm.value.nombre 
      const precio = this.sizeForm.value.precio 
  
      this.sizes.push({nombre: nombre, precio: precio})
      this.sizeForm.setValue({
        nombre: '',
        precio: ''
      })
    }else {
      this.utilerias.showAcceptMessage("Formularios incorrectos", "Revisa que hallas llenado correctament todos los formularios")
    }
  }

  eraseSize(index: any){
    this.sizes.splice(index, 1);
  }

  eraseOpcion(index: any){
    this.tipos.splice(index, 1);
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
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

  modalSlideTo(slideNumberModal) {
    switch (slideNumberModal) {
      case 0:
        this.sliderModal1.slideTo(0);
        this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-primario)');
        break
      case 1:
        this.sliderModal1.slideTo(1);
        this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-primario)');
        break
      case 2:
        this.sliderModal1.slideTo(2);
        this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-primario)');
        break
    }
  }

  modalSlideSwipe() {
    this.sliderModal1.getActiveIndex().then((indexModal: number) => {
      switch (indexModal) {
        case 0:
          this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-primario)');
          break
        case 1:
          this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-primario)');
          break
        case 2:
          this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', 'var(--color-secundario)');
          this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', 'var(--color-primario)');
          this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', 'var(--color-primario)');
          break
      }
    });
  }

  onSelect(event) {
    this.files = []
    this.files.push(...event.addedFiles);
    this.verificarArchivo()
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
