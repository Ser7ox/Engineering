import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ModaldeleteComponent } from '../modaldelete/modaldelete.component';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit, AfterViewInit {

  person: Persona[];
  saveperson: Persona;
  variabile: boolean;
  
  @ViewChild(ModaldeleteComponent) 
  child:ModaldeleteComponent;

  constructor( private personaservice: PersonaService ) { }

  ngAfterViewInit() {
    console.log(this.child.clickModale(true));
  }

  ngOnInit(): void {
    this.person = this.personaservice.getutenti()
  }

  eliminaRiga(persona: Persona) {
    this.person = this.personaservice.eliminaUtente(persona);
    this.variabile = this.child.clickModale(true)
  }

  takeData(outputP: Persona) {
    this.person = this.personaservice.dataUtente(outputP);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona; 
    // input <= persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson. 
  }

}    





