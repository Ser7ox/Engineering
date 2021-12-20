import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
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

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    this.emailSub = this.LocalStorageService.myData.subscribe(data => {
      if (data) {
        this.email = data.email;
      }
    })

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        setHeaders: this.email
      })
    });
  
    console.log('Intercepted HTTP call', authReq);
  
    return next.handle(authReq);
  }
  
  ngOnDestroy() {
    if ( this.emailSub ) {
      this.emailSub.unsubscribe();
    }
  }
}

