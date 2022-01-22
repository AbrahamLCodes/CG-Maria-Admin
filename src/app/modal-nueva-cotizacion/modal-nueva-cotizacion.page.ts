import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nueva-cotizacion',
  templateUrl: './modal-nueva-cotizacion.page.html',
  styleUrls: ['./modal-nueva-cotizacion.page.scss'],
})
export class ModalNuevaCotizacionPage implements OnInit {
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
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-secundario');
    }
    if(slideNumberModal == 2){
      this.sliderModal1.slideTo(2);
      this.renderer.setStyle(this.SlideM2.nativeElement, 'background-color', '--color-primario');
      this.renderer.setStyle(this.SlideM0.nativeElement, 'background-color', '--color-secundario');
    }
  
  
  
  }



  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
