import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/persona/model/persona.model';
import { PersonaService } from 'src/app/persona/service/persona.service';
import { PersonaQuery } from 'src/app/persona/store/persona.query';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  idSub: Subscription;
  titleSub: Subscription;
  idValue: number;
  persona: Persona;
  profilo: FormGroup;
  headerForm: string;
  error = this.personaQ.selectError();
  
  constructor(protected router: Router, private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private personaS: PersonaService, private personaQ: PersonaQuery) { }

  ngOnInit(): void {

    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required]],
      cognome: [undefined,[Validators.required]],
      indirizzo: [undefined,[Validators.required]],
    },);

    this.idSub = this._ActivatedRoute.params.subscribe(prm => {
      this.idValue = +prm['id'];
    })

    this.titleSub = this._ActivatedRoute.data.subscribe(data => {
      this.headerForm=data['title'];
    })

    if (this.idValue) {
      this.personaS.getPersona(this.idValue);
      this.personaQ.selectEntity(this.idValue).subscribe(data => {
        this.persona = data;
        this.setProfilo();
      })
    }

  }

  ngOnDestroy() {
    if ( this.idSub ) {
      this.idSub.unsubscribe();
    }
    if ( this.titleSub) {
      this.titleSub.unsubscribe();
    }
  }

  setProfilo() {
    this.profilo.get('nome').setValue(this.persona?.nome);
    this.profilo.get('cognome').setValue(this.persona?.cognome);
    this.profilo.get('indirizzo').setValue(this.persona?.indirizzo);
  }

  saveForm() {
    const id = this.persona ? this.persona.id : undefined;
    const persona = new Persona(
      id,
      this.profilo.get('nome').value,
      this.profilo.get('cognome').value,
      this.profilo.get('indirizzo').value
    )
    if (this.persona) {
      const isConfirmed = confirm(`Aggiorna ${persona.nome} ` +  `${persona.cognome}`);
      if (!isConfirmed) {
        return;
      }
      this.persona = persona;
      this.personaS.updatePersona(persona);  
    } else {
      const isConfirmed = confirm(`Aggiungi ${persona.nome} ` +  `${persona.cognome}`);
      if (!isConfirmed) {
        return;
      }
      this.profilo.reset();
      this.personaS.addPersona(persona);
    }
  }

  back() {
    this.router.navigate(['home/table']);
  }

}
