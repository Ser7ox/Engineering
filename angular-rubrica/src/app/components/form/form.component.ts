import { Component,OnInit,SimpleChanges,ViewChild} from '@angular/core';
import { Persona } from '../../model/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filtronumeri } from '../../validator/filtronumeri.validator';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{

  @ViewChild(ModalComponent)child: ModalComponent;
  profilo: FormGroup;
  parameterValue: number;
  value: string;
  value2: string;
  utente: Persona;
  headF: string;
  bodyF: string;
  page: number;
  
  constructor(private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private personaservice: PersonaService) {}

  ngOnInit(): void {
    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      datanascita: [undefined,[Validators.required]],
      sesso: [undefined,[Validators.required]],
      telefono: [undefined,[Validators.required]],
      indirizzo: [undefined],
    });

    this._ActivatedRoute.params.subscribe(prm => {
      this.parameterValue = +prm.id; 
    })

    this._ActivatedRoute.data.subscribe(data => {
      this.value=data.titleEdit;
    })

    this._ActivatedRoute.data.subscribe(data => {
      this.value2=data.titleNew;
    })

    this._ActivatedRoute.queryParams.subscribe(param => {
        this.page = +param['page'];
      });


    if ( this.parameterValue ) {
      this.utente = this.personaservice.recuperaDati(this.parameterValue);
    }

    this.setProfilo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.profilo) {
      this.setProfilo();
    }
  }

  setProfilo() {
    this.profilo.get('nome').setValue(this.utente?.nome);
    this.profilo.get('cognome').setValue(this.utente?.cognome);
    this.profilo.controls['datanascita'].setValue(this.utente?.dateUtente());    
    this.profilo.get('sesso').setValue(this.utente?.sesso);
    this.profilo.get('telefono').setValue(this.utente?.telefono);
    this.profilo.get('indirizzo').setValue(this.utente?.indirizzo);
  }

  SaveForm() {
    
    if ( this.utente ) {
      const persona = new Persona(
        this.utente.id,
        this.profilo.get('nome').value,
        this.profilo.get('cognome').value,
        this.profilo.get('datanascita').value,
        this.profilo.get('sesso').value,
        this.profilo.get('telefono').value,
        this.profilo.get('indirizzo').value
      );
      this.profilo.get('sesso').disable();
      this.headF = 'Profilo aggiornato';
      this.bodyF = 'Il profilo di '+ persona.nomeCompleto +' è stato aggiornato correttamente.';
      this.child.show();
      this.personaservice.modificaUtente(persona);
    }
    else {
      const persona = new Persona(
        undefined,
        this.profilo.get('nome').value,
        this.profilo.get('cognome').value,
        this.profilo.get('datanascita').value,
        this.profilo.get('sesso').value,
        this.profilo.get('telefono').value,
        this.profilo.get('indirizzo').value
      );
      this.profilo.reset();
      this.headF = 'Profilo creato';
      this.bodyF = 'Il profilo di '+ persona.nomeCompleto +' è stato inserito correttamente.';
      this.child.show();
      this.personaservice.creaUtente(persona);
    }
    
  }
}
