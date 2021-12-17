import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private LocalStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });
  
    console.log('Intercepted HTTP call', authReq);
  
    return next.handle(authReq);
  }       
}

