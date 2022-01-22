import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private storage: Storage = localStorage;

  constructor(
    private router: Router
  ) { }

  public removeSessionKey(key: string) {
    return sessionStorage.removeItem(key)
  }

  public removeLocalKey(key: string) {
    return sessionStorage.removeItem(key)
  }

  public setToken(token: string): void {
    sessionStorage.setItem('tokenAdminFRESHCO', token);
  }

  public getToken(): string {
    return sessionStorage.getItem('tokenAdminFRESHCO');
  }

  public removeToken() {
    sessionStorage.removeItem('tokenAdminFRESHCO')
  }

  public setUsuario(usuario) {
    sessionStorage.setItem('usuarioAdminFRESHCO', usuario);
  }

  public getObjectUsuario() {
    return JSON.parse(this.storage.getItem('usuarioAdminFRESHCO'));
  }

  public removeUsuarioLocal() {
    return this.storage.removeItem('usuarioAdminFRESHCO')
  }

  public logout() {
    this.clear()
    this.router.navigateByUrl("/login").then(_ => {
      window.location.reload()
    })
  }

  public clear() {
    this.storage.clear();
    sessionStorage.clear()
  }
}