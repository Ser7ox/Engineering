import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './_services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor (private localStorageService: LocalStorageService, private router: Router) {}
  
  /*showNav (): null {
    if () {
      return null;
    }
    return null;
  } */
  
  clearStorage() {
    this.localStorageService.clearAllLocalStorage();
    this.router.navigate(['login']);
  }
}
