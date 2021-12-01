import { Component,OnInit,Input,SimpleChanges,Output,EventEmitter} from '@angular/core';
import { Persona } from '../../model/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filtronumeri } from '../../validator/filtronumeri.validator';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{

  @Output() outputP = new EventEmitter<Persona>();
  profilo: FormGroup;
  parameterValue: number;
  utente: Persona;
  
  constructor(private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private personaservice: PersonaService) {}

  ngOnInit(): void {
    this.profilo = this.fb.group({
      id: [undefined],
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      datanascita: [undefined,[Validators.required]],
      sesso: [undefined],
      telefono: [undefined],
      indirizzo: [undefined],
    });

    this._ActivatedRoute.params.subscribe(param => {
      this.parameterValue = +param.id;
    })

    this.utente = this.personaservice.recuperaDati(this.parameterValue);

    this.setProfilo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.profilo) {
      this.setProfilo();
    }
  }

  setProfilo() {
    this.profilo.get('id').setValue(this.utente?.id);
    this.profilo.get('nome').setValue(this.utente?.nome);
    this.profilo.get('cognome').setValue(this.utente?.cognome);
    this.profilo.controls['datanascita'].setValue(this.utente?.dateUtente());    
    this.profilo.get('sesso').setValue(this.utente?.sesso);
    this.profilo.get('telefono').setValue(this.utente?.telefono);
    this.profilo.get('indirizzo').setValue(this.utente?.indirizzo);
  }

  SaveForm() {
    const persona = new Persona(
      this.utente.id,
      this.profilo.get('nome').value,
      this.profilo.get('cognome').value,
      this.profilo.get('datanascita').value,
      this.profilo.get('sesso').value,
      this.profilo.get('telefono').value,
      this.profilo.get('indirizzo').value
    );

    return this.personaservice.modificaUtente(persona);
  }
}
