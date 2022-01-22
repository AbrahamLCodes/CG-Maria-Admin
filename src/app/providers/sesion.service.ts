import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiclientService } from './apiclient.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private storage: Storage,
    private apiclient: ApiclientService
  ) { }

  public setToken (token: String): Promise<any> {
    return this.storage.set("token", token);
  }

  public getToken (): Promise<String> {
    return this.storage.get("token").then((value) => {
      return value;
    });
  }

  public logout (): Promise<any> {
    return this.storage.remove("token");
  }
}
