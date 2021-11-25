import {Component,OnInit,ViewChild} from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ModaldeleteComponent } from '../modaldelete/modaldelete.component';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})
export class RubricaComponent implements OnInit {
  person: Persona[];
  saveperson: Persona;

  @ViewChild(ModaldeleteComponent)
  child: ModaldeleteComponent;

  @ViewChild('modale') public modale: ModalDirective;

  constructor(private personaservice: PersonaService) {}

  ngOnInit(): void {
    this.person = this.personaservice.getutenti();
  }

  eliminaRiga(persona: Persona) {
    this.person = this.personaservice.eliminaUtente(persona);
    this.modale.show();
    this.child.show();
  }

  hide(): void {
    this.modale.hide();
  }

  takeData(outputP: Persona) {
    this.person = this.personaservice.dataUtente(outputP);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona;
    // input <= persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson.
  }
}
