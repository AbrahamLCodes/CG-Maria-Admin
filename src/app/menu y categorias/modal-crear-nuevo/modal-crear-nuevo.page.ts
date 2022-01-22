import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { ClikPDF } from 'src/app/Cliktools/clikpdf';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-crear-nuevo',
  templateUrl: './modal-crear-nuevo.page.html',
  styleUrls: ['./modal-crear-nuevo.page.scss'],
})

export class ModalCrearNuevoPage implements OnInit {

  @ViewChild('modalSlider1', { read: IonSlides }) sliderModal1: IonSlides;
  @ViewChild("modalSlide0") SlideM0: ElementRef;
  @ViewChild("modalSlide1") SlideM1: ElementRef;
  @ViewChild("modalSlide2") SlideM2: ElementRef;

  files: File[] = [];
  public sucursales: any[]
  public complementos = []
  public categorias = []

  public detalleForm: FormGroup
  public sizeForm: FormGroup
  public opcionesForm: FormGroup
  public detallesForm: FormGroup

  public slideOpts1 = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false,
    autoHeight: true
  };

  public sizes: any = []
  public tipos: any = []

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private utilerias: UtileriasService,
    private formBuilder: FormBuilder,
    private apiclient: ApiclientService,
    public clikPDF: ClikPDF
  ) {
    this.detalleForm = formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      soloEnComedor: [false, [Validators.required]],
      sucursales: [[''], [Validators.required]],
      categorias: [[''], [Validators.required]],
      tipos: [['']],
      sizes: null,
      recomendado: [false, [Validators.required]],
      promocion: [false, [Validators.required]],
      popular: [false, [Validators.required]],
      nuevo: [false, [Validators.required]],
      vegano: [false, [Validators.required]],
    })

    this.sizeForm = formBuilder.group({
      nombre: [''],
      precio: ['']
    });
  }

  public ngAfterViewInit() {
    this.sliderModal1.update();
  }

  public ngOnInit() {
    this.getSucursales()
    this.getComplementos()
    this.getCategorias()
    this.dataUrlToFile("../assets/img/productodefault.jpg", "imagendefault.jpg")
      .then(response => {
        console.log(response);
        this.files.push(response)
      })
  }

  public agregarSize() {
    if (this.sizeForm.valid) {
      const nombre = this.sizeForm.value.nombre
      const precio = this.sizeForm.value.precio

      this.sizes.push({ nombre: nombre, precio: precio })
      this.sizeForm.setValue({
        nombre: '',
        precio: ''
      })
    } else {
      this.utilerias.showAcceptMessage("Formularios incorrectos", "Revisa que hallas llenado correctament todos los formularios")
    }
  }

  private async dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
  }

  public eraseSize(index: any) {
    this.sizes.splice(index, 1);
  }

  public eraseOpcion(index: any) {
    this.tipos.splice(index, 1);
  }

  public submitProducto() {
    if (this.detalleForm.valid) {
      this.detalleForm.patchValue({
        sizes: this.sizes,
      });

      const formData = new FormData();
      formData.append('data', JSON.stringify(this.detalleForm.value));
      formData.append('files.imagen', this.files[0]);

      this.apiclient.guardarRecurso("productos", formData).subscribe(
        (req: any) => {
          this.cerrarModal();
          window.location.reload();
        },
        (error: any) => {
        }
      )
    } else {
      this.utilerias.showAcceptMessage("Formularios incorrectos", "Revisa que hallas llenado correctament todos los formularios")
    }
  }

  public getSucursales() {
    this.apiclient.getRecurso("sucursales").subscribe((response: any) => {
      this.sucursales = response;
    });
  }

  public getComplementos() {
    this.apiclient.getRecurso("tipos").subscribe((response: any) => {
      this.complementos = response;
    });
  }

  public getCategorias() {
    this.apiclient.getRecurso("categorias").subscribe((response: any) => {
      this.categorias = response;
    });
  }

  public verificarArchivo() {
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

  public cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public onSelect(event) {
    this.files = []
    this.files.push(...event.addedFiles);
    this.verificarArchivo()
  }

  public onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  public modalSlideTo(slideNumberModal) {
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

  public modalSlideSwipe() {
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
}
