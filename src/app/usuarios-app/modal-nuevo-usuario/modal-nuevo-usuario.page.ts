import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClikForms } from 'src/app/Cliktools/clikforms';
import { ClikTools } from 'src/app/Cliktools/cliktools';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';

@Component({
  selector: 'app-modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.page.html',
  styleUrls: ['./modal-nuevo-usuario.page.scss'],
})
export class ModalNuevoUsuarioPage implements OnInit {

  public usuarioForm: FormGroup

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private strapiclient: StrapiClientService,
    private fb: FormBuilder,
    private cliktools: ClikTools,
    private clikForms: ClikForms
  ) {
    this.usuarioForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      monedero: [0, [Validators.required]],
      tipo: "CLIENTE"
    })
  }

  ngOnInit() {

  }

  submitUsuario() {
    if (this.usuarioForm.valid) {
      const password = this.usuarioForm.value.password
      const confirmPassword = this.usuarioForm.value.confirmPassword
      if (password == confirmPassword) {
        this.strapiclient.crearUsuario(this.usuarioForm.value).subscribe((response: any) => {
          if (response.hasOwnProperty("user")) {
            this.strapiclient.crearUsuarioInfo({ usuario: response.user.id }, null).subscribe((responseInfo: any) => {
              if (responseInfo.hasOwnProperty("id")) {
                this.cliktools.customToast("User created succesfully", "primary")
                this.modalController.dismiss({
                  'dismissed': true
                }).then(_ => window.location.reload());
              }
            })
          }
        })
      } else {
        this.cliktools.warningToast("Password does not match")
      }
    } else {
      this.clikForms.presentInvalidEnToast()
    }
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
