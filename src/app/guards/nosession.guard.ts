import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../servicios/sesion.service';

@Injectable({
    providedIn: 'root'
})

export class NoSessionGuard implements CanActivate {

    constructor(
        private router: Router,
        private sesion: SesionService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.sesion.getToken()) {
            return true
        } else {
            this.router.navigateByUrl('dashboard')
            return false
        }
    }
}
