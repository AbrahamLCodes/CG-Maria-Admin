import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import apiResponse from '../interfaces/ApiResponse';
import { ApiclientService } from './apiclient.service';
import { SesionService } from './sesion.service'

@Injectable({
  providedIn: 'root'
})
export class Helpers {

  constructor(
    private apiClient: ApiclientService,
    private sesion : SesionService,
    private alert : AlertController,
    private router: Router,
    private storage: Storage
  ) { }

  public setToken (token: String): Promise<any> {
    return this.storage.set("token", token);
  }

  public getToken (): Promise<String> {
    return this.storage.get("token").then((value) => {
      return value;
    });
  }
}
