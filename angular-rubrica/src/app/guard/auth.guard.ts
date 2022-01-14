import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../_services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private localStorageService: LocalStorageService, private router: Router) {}
  userRole = this.localStorageService.utenteLoggato.role;
  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.localStorageService.utenteLoggato) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }

}
