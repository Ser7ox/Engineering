import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  email: string;
  emailSub: Subscription;

  constructor(private LocalStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    this.emailSub = this.LocalStorageService.myData.subscribe(data => {
      if (data) {
        this.email = data.email;
      }
    })
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Email', `${this.email}`),
    });
    console.log('Intercepted HTTP call', modifiedReq);
    return next.handle(modifiedReq);
  }
  
}

