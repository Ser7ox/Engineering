import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { LocalStorageService } from './_services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  mostraEmail: string;
  emailSub: Subscription;
  showNav: boolean;

  constructor (private localStorageService: LocalStorageService, private router: Router) {}

  ngOnInit() {
    this.emailSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.mostraEmail = data.email;
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    })

  }

  ngOnDestroy() {
    if ( this.emailSub ) {
      this.emailSub.unsubscribe();
    }
  }

  home() {
    this.router.navigate(['persona/rubrica']);
  }

  personaNew() {
    this.router.navigate(['persona/form']);
  }

  lazy() {
    this.router.navigate(['lazy']);
  }
  
  logout() {
    this.localStorageService.clearAllLocalStorage();
    this.router.navigate(['login']);
    this.showNav = false;
  }
}
