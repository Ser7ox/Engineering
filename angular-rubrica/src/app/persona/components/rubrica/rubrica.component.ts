import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/persona/services/persona.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona/model/persona';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {
  
  person:Persona[] = []; headR:string; bodyR:string; page = 0;
  @ViewChild(ModalComponent)child: ModalComponent;
  currentUser: any;
  showLoad: boolean = true;
  role: string;
  roleSub: Subscription;
  showAdmin: boolean;

  constructor(private personaservice: PersonaService, private router: Router, private route: ActivatedRoute, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.roleSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.role = data.role;
      }
    })

    if (this.role === "admin") {
      this.showAdmin = true;
    } else if( this.role === "user") {
      this.showAdmin = false;
    }

    this.estraiUsers();
  }

  ngOnDestroy() {
    if ( this.roleSub ) {
      this.roleSub.unsubscribe();
    }
  }

  estraiUsers() {
    setTimeout(()=>{
      this.personaservice.getUtenti().subscribe((data: Persona[]) => {
        this.showLoad = false;
        this.person = data;
      })
    }, 300);
    
  }

  remove(id:number) {
    this.personaservice.eliminaUtente(id).subscribe(() => {
      this.estraiUsers();
    })
    this.headR = 'Profilo Eliminato!';
    this.bodyR = 'Il profilo è stato eliminato';
    this.child.show();
  }

  address(id: number) {
    let address: string;
    this.personaservice.getUtente(id).subscribe((data: Persona) => {
      address = data.indirizzo;
      this.headR = 'Indirizzo di ' + data.nome + ' ' + data.cognome;
      this.bodyR = address;
      this.child.show();
    })
  }

  form(id?: number){
    if (id) {
      this.router.navigate(['persona/form', id], { queryParams: { page: this.page + 1 } });
    }
    else {
      this.router.navigate(['persona/form'], { queryParams: { page: this.page + 2 } });
    }
  }
}
