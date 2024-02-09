import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Persona } from 'src/app/persona/model/persona';
import { PersonaService } from 'src/app/persona/services/persona.service';
import { ModalComponent } from '../../../shared/modal/modal.component';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {

  allPerson:Persona[] = [];
  page = 0;
  showAdmin: boolean;
  role: string;
  email: string;
  roleSub: Subscription;
  getUtente: Subscription;
  filterName: string;
  emailDisplay: string;
  headR:string;
  bodyR:string;
  alertShow = false;
  lengthPersona: number;
  headContact: string;
  bodyContact: string;
  classAlert: string;
  showLoad = false;
  person:Persona[] = [];
  @ViewChild(ModalComponent)modalChild: ModalComponent;

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

    this.estraiUsers();
  }

  ngOnDestroy() {
    if ( this.roleSub ) {
      this.roleSub.unsubscribe();
    }
  }

  estraiUsers() {
    this.showLoad = true;
    // setTimeout( () => {
      this.personaService.getUtenti().subscribe((data: Persona[]) => {
        this.person = data;
        this.lengthPersona = data.length;
        this.showLoad = false;
      })
    // },600);
  }

  removeUser(id:number) {
    this.personaService.eliminaUtente(id).subscribe(() => {
      this.headR = 'Profilo Eliminato!';
      this.bodyR = 'Il profilo è stato eliminato';
      this.modalChild.show();
      this.updateTable();
    });
  }

  updateTable() {
    this.estraiUsers();
    if (this.lengthPersona === 0) {
      this.headContact = 'Non ci sono più persone!';
      this.bodyContact = 'Aggiungile ora';
      this.classAlert = 'warning';
      this.alertShow = true;
    }
  }

}
