import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {
  
  person:Persona[] = []; utente: Persona; headR:string; bodyR:string; page = 0;
  @ViewChild(ModalComponent)child: ModalComponent;

  constructor(private personaservice: PersonaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.estraiUsers();
  }

  estraiUsers() {
    this.personaservice.getUtenti().subscribe((data: Persona[]) => {
      this.person = data;
    })
  }

  remove(id:number) {
    this.personaservice.eliminaUtente(id).subscribe(res => {})
    this.headR = 'Profilo Eliminato!';
    this.bodyR = 'Il profilo è stato eliminato';
    this.child.show();
  }

  address(id: number) {
    let address: string;
    this.personaservice.getUtente(id).subscribe((data: Persona) => {
      address = data.indirizzo;
      this.headR = 'Indirizzo di ' + data.nome + ' ' + data.cognome;
      if (!address) {
        this.bodyR = "Informazione non disponibile per quest'utente.";
      } else {
        this.bodyR = address;
      }
      this.child.show();
    })
  }

  form(id?: number){
    if (id) {
      this.router.navigate(['/form', id], { queryParams: { page: this.page + 1 } });
    }
    else {
      this.router.navigate(['/form'], { queryParams: { page: this.page + 2 } });
    }
  }

}
