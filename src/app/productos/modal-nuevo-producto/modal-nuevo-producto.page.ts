import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nuevo-producto',
  templateUrl: './modal-nuevo-producto.page.html',
  styleUrls: ['./modal-nuevo-producto.page.scss'],
})
export class ModalNuevoProductoPage implements OnInit {
  @ViewChild('modalSlider1', { read: IonSlides }) sliderModal1: IonSlides;
  @ViewChild("modalSlide0") SlideM0: ElementRef;
  @ViewChild("modalSlide1") SlideM1: ElementRef;
  @ViewChild("modalSlide2") SlideM2: ElementRef;
  constructor(private renderer: Renderer2, public modalController: ModalController) { }
  slideOpts1 = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false,
    autoHeight: true
  };
  ngAfterViewInit() {
    this.sliderModal1.update();
  
  }
  ngOnInit() {
   
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  modalSlideTo(slideNumberModal){
    
    if(slideNumberModal == 0){
      this.sliderModal1.slideTo(0);
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-secundario');
    }
    if(slideNumberModal == 1){
      this.sliderModal1.slideTo(1);
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-secundario');
    }
    if(slideNumberModal == 2){
      this.sliderModal1.slideTo(2);
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-secundario');
    }
  
  
  
  }

  modalSlideSwipe(){
    this.sliderModal1.getActiveIndex().then((indexModal: number) => {
    if(indexModal == 0){
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-secundario');
    }
    if(indexModal == 1){
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-secundario');
    }
    if(indexModal == 2){
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM1.nativeElement, 'background-color', '--color-secundario');
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-secundario');
    }
  });
  }

  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
