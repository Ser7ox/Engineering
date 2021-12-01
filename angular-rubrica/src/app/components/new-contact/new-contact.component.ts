import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { filtronumeri } from '../../validator/filtronumeri.validator';
import { Persone } from 'src/app/persona-server';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  
  profilo: FormGroup;
  person = Persone;
  @ViewChild(ModalComponent)child: ModalComponent;
  headR: string;
  bodyR: string;

  constructor(private fb: FormBuilder, private personaservice: PersonaService) { }

  ngOnInit(): void {
    this.profilo = this.fb.group({
      id: [undefined],
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      datanascita: [undefined,[Validators.required]],
      sesso: [undefined,[Validators.required]],
      telefono: [undefined,[Validators.required]],
      indirizzo: [undefined,[Validators.required]],
    });
  }

  SaveForm() {
    const persona = new Persona(
      this.profilo.get('id').value,
      this.profilo.get('nome').value,
      this.profilo.get('cognome').value,
      this.profilo.get('datanascita').value,
      this.profilo.get('sesso').value,
      this.profilo.get('telefono').value,
      this.profilo.get('indirizzo').value
    );
    this.profilo.reset();
    this.headR = 'Profilo creato';
    this.bodyR = 'Il profilo di '+ persona.nome + ' ' + persona.cognome +' è stato inserito correttamente.';
    this.child.show();
    let item1 = this.person.find(i => i.id === this.person.length);
    persona.id = item1.id + 1;
    return this.personaservice.creaUtente(persona);
  }

}
