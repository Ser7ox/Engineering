import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonaService } from './persona/services/persona.service';
import { LocalStorageService } from './_services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  mostraEmail: string;
  role: string;
  emailSub: Subscription;
  showAdmin: boolean;
  showNav: boolean;
  loading: boolean = false;

  constructor (private localStorageService: LocalStorageService, private router: Router, private personaService: PersonaService) {}

  ngOnInit() {
    this.emailSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.mostraEmail = data.email;
        this.role = data.role;
        this.showNav = true;
        this.loading = false;
        if (this.role === "admin") {
          this.showAdmin = true;
        } else if( this.role === "user") {
          this.showAdmin = false;
        }
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
    this.router.navigate(['persona']);
  }

  personaNew() {
    this.router.navigate(['persona/form']);
  }

  lazy() {
    this.router.navigate(['lazy']);
  }
  
  logout() {
    this.loading = true;
    setTimeout( () => {
      this.localStorageService.clearAllLocalStorage();
      this.router.navigate(['login']);
      this.showNav = false;
      this.personaService.deleteCookie({name:'email'});
      
    },500);
  }
}
