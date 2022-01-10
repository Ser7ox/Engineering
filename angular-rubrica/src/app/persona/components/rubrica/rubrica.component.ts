import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/persona/services/persona.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona/model/persona';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {

  allPerson:Persona[] = [];
  page = 0;
  showAdmin: boolean;
  currentUser: any;
  role: string;
  email: string;
  roleSub: Subscription;
  getUtente: Subscription;
  filterName: string;
  emailDisplay: string;
  headR:string;
  bodyR:string;
  @ViewChild(ModalComponent)child: ModalComponent;

  constructor(private personaService: PersonaService, private cookieService: CookieService, private router: Router, private route: ActivatedRoute, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.roleSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.role = data.role;
        this.email = data.email;
      }
    })

    if (this.role === "admin") {
      this.showAdmin = true;
    } else if( this.role === "user") {
      this.showAdmin = false;
    }

    //this.personaService.setCookie({name:'email',value:this.email, expireDays:1 });
    this.cookieService.put('email', this.email);
  }

  ngOnDestroy() {
    if ( this.roleSub ) {
      this.roleSub.unsubscribe();
    }
  }

  remove(id:number) {
    this.personaService.eliminaUtente(id).subscribe(() => {
    })
    this.headR = 'Profilo Eliminato!';
    this.bodyR = 'Il profilo è stato eliminato';
    this.child.show();
  } 

}
