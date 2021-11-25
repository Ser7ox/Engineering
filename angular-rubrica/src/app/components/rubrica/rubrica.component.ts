import { Component,OnInit,ViewChild } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ModaldeleteComponent } from '../modaldelete/modaldelete.component';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})
export class RubricaComponent implements OnInit {
  person: Persona[];
  saveperson: Persona;
  headR: string = "Profilo eliminato";
  bodyR: string = "Il profilo è stato eliminato.";

  @ViewChild(ModaldeleteComponent)
  child: ModaldeleteComponent;

  constructor(private personaservice: PersonaService) {}

  ngOnInit(): void {
    this.person = this.personaservice.getutenti();
  }

  eliminaRiga(persona: Persona) {
    this.person = this.personaservice.eliminaUtente(persona);
    this.child.show();
  }

  takeData(outputP: Persona) {
    this.person = this.personaservice.dataUtente(outputP);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona;
    // input <= persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson.
  }
}
