import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StrapiClientService } from '../servicios/strapiclient.service';
import { ClikTools } from '../Cliktools/cliktools';
import { ClikForms } from '../Cliktools/clikforms';
import { SesionService } from '../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public loginForm: FormGroup

  constructor(
    formBuilder: FormBuilder,
    private strapiclient: StrapiClientService,
    private router: Router,
    private storage: Storage,
    private clikTools: ClikTools,
    private clikForms: ClikForms,
    private sesion: SesionService
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  public async ngOnInit() {
    await this.storage.create()
  }

  public login() {
    if (this.loginForm.valid) {
      this.strapiclient.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((response: any) => {
          if (response.hasOwnProperty("jwt")) {
            this.sesion.setToken(response.jwt);
            this.sesion.setUsuario(JSON.stringify(response.user))
            this.clikTools.customToast("Bienvenido " + response.user.username + " al administrador de El Comal!", "primary")
            this.router.navigateByUrl("/dashboard")
          }
        })
    } else {
      this.clikForms.presentInvalidEnToast()
    }
  }
}