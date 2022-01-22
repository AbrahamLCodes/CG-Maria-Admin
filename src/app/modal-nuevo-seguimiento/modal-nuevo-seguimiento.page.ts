import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nuevo-seguimiento',
  templateUrl: './modal-nuevo-seguimiento.page.html',
  styleUrls: ['./modal-nuevo-seguimiento.page.scss'],
})
export class ModalNuevoSeguimientoPage implements OnInit {
  constructor(private renderer: Renderer2, public modalController: ModalController) { }
  ngAfterViewInit() {
  
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


  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
