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
  obs1: any;
  obs2: any;
  obs3: any;
  html: string;
  classDynamic: any;
  
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

    this.obs1 = this._ActivatedRoute.params.subscribe(prm => {
      this.parameterValue = +prm.id; 
    })

    this.obs2 = this._ActivatedRoute.data.subscribe(data => {
      this.value=data.title;
    })

    this.obs3 = this._ActivatedRoute.queryParams.subscribe(param => {
        this.page = +param['page'];
      });

    if ( this.parameterValue ) {
      this.utente = this.personaservice.recuperaDati(this.parameterValue);
      this.profilo.controls['sesso'].disable();
    }

    this.setProfilo();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.profilo) {
      this.setProfilo();
    }
  }

  ngOnDestroy() {
    this.obs1.unsubscribe();
    this.obs2.unsubscribe();
    this.obs3.unsubscribe();
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
      this.classDynamic = 'alert alert-primary alert-dismissible fade show m-0';
      this.html = ' <i class="fas fa-thumbs-up"></i> ';
      this.headF = 'Profilo salvato!';
      this.bodyF = 'Ben fatto, il profilo di '+ persona.nomeCompleto +' è stato salvato correttamente.';
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
      this.classDynamic = 'alert alert-success alert-dismissible fade show m-0';
      this.html = ' <i class="fas fa-check-circle"></i>';
      this.headF = 'Profilo creato!';
      this.bodyF = 'Ben fatto, l\'utente '+ persona.nomeCompleto +' è stato creato correttamente.';
      this.personaservice.creaUtente(persona);
    }
    
  }
}
