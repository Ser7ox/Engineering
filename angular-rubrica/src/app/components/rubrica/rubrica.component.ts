import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})

export class RubricaComponent implements OnInit {
  
  person: Persona[];
  saveperson: Persona;
  headR: string;
  bodyR: string;
  buttonR: string;

  @ViewChild(ModalComponent)
  child: ModalComponent;

  constructor(private personaservice: PersonaService) {}

  ngOnInit(): void {
    this.person = this.personaservice.getutenti();
  }

  deleteRow(persona: Persona) {
    this.person = this.personaservice.eliminaUtente(persona);
    this.headR = 'profilo eliminato';
    this.bodyR = 'Il profilo è stato eliminato';
    this.buttonR = "Close";
    this.child.show();
  }


  takeData(outputP: Persona) {
    this.person = this.personaservice.dataUtente(outputP);
  }

  hide (): void {
    this.child.hide();
  }

  selectRow(persona: Persona) {
    this.saveperson = persona;
    this.headR = 'Indirizzo di ' + this.saveperson.nomeCompleto;
    if (!this.saveperson.indirizzo) {
      this.bodyR = "Informazione non disponibile per quest'utente.";
    } else {
      this.bodyR = this.saveperson.indirizzo;
    }
    this.buttonR = "Close";
    this.child.show();
  }

  editForm(persona: Persona) {
    this.saveperson = persona;
    this.headR = 'Profilo di ' + this.saveperson.nomeCompleto;
    this.bodyR == '';
    console.log(this.bodyR)
    this.child.show(); 
  }
}
