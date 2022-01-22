import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SesionService } from './sesion.service';
import { SpinnerService } from '../services/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private sesionService: SesionService,
    private spiner: SpinnerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spiner.show();
    if (this.sesionService.getToken() !== null && !request.url.includes("maps.google") && !request.url.includes("maps.googleapis")) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.sesionService.getToken()}`
        }
      });
    } 
    return next.handle(request).pipe(
      finalize(() => this.spiner.hide())
    );
  }
}