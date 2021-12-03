import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {
  
  person:Persona[];
  saveperson:Persona;
  headR:string;
  bodyR:string;
  titleNew:string = "Crea contatto";
  titleEdit:string = "Modifica contatto";
  @ViewChild(ModalComponent)child: ModalComponent;
  page = 0;

  constructor(private personaservice: PersonaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.person = this.personaservice.getutenti();
  }

  deleteRow(persona: Persona) {
    this.person = this.personaservice.eliminaUtente(persona);
    this.headR = 'Profilo Eliminato';
    this.bodyR = 'Il profilo è stato eliminato';
    this.child.show();
  }

  form(id?: number){
    if (id) {
      this.router.navigate(['/form', id], { queryParams: { page: this.page + 1 } });
    }
    else {
      this.router.navigate(['/form'], { queryParams: { page: this.page + 2 } });
    }
  }

  selectRow(persona: Persona) {
    this.saveperson = persona;
    this.headR = 'Indirizzo di ' + this.saveperson.nomeCompleto;
    if (!this.saveperson.indirizzo) {
      this.bodyR = "Informazione non disponibile per quest'utente.";
    } else {
      this.bodyR = this.saveperson.indirizzo;
    }
    this.child.show();
  }

}
