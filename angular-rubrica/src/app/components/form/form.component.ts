import { Component,OnInit,SimpleChanges,ViewChild} from '@angular/core';
import { Persona } from '../../model/persona';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { filtronumeri } from '../../validator/filtronumeri.validator';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalComponent } from '../modal/modal.component';
import { Observable, Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/validator/custom-validators';
import { map } from 'rxjs/operators';

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
  idSub: Subscription; 
  titleSub: Subscription; 
  pageSub: Subscription;
  modificaSub: Subscription;
  creaSub: Subscription;
  htmlIcon: string; 
  classDynamic: any; 
  alertShow: boolean;
  
  constructor(private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private personaservice: PersonaService) {}

  ngOnInit(): void {
    
    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      datanascita: [undefined,[Validators.required]],
      sesso: [undefined,[Validators.required]],
      indirizzo: [undefined,[Validators.required]],
      telefono: [undefined,[Validators.required]],
    }, { validators:CustomValidators.phoneAddress });

    this.addAsyncValidator();

    this.idSub = this._ActivatedRoute.params.subscribe(prm => {
      this.parameterValue = +prm.id;
    })
    this.titleSub = this._ActivatedRoute.data.subscribe(data => {
      this.value=data.title;
    })
    this.pageSub = this._ActivatedRoute.queryParams.subscribe(param => {
      this.page = +param['page'];
    });

    if ( this.parameterValue ) {
      this.personaservice.getUtente(this.parameterValue).subscribe((data: Persona) => {
      this.utente = data;
      this.setProfilo();
    })
      this.profilo.controls['sesso'].disable();
    }
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.profilo) {
      this.setProfilo();
    }
  }

  ngOnDestroy() {
    if ( this.idSub ) {
      this.idSub.unsubscribe();
    }
    if ( this.titleSub ) {
      this.titleSub.unsubscribe();
    }
    if ( this.pageSub ) {
      this.pageSub.unsubscribe();
    }
    if ( this.modificaSub ) {
      this.modificaSub.unsubscribe();
    }
    if ( this.creaSub ) {
      this.creaSub.unsubscribe();
    }
  }
  
  setProfilo() {
    this.profilo.get('nome').setValue(this.utente?.nome);
    this.profilo.get('cognome').setValue(this.utente?.cognome);
    this.profilo.controls['datanascita'].setValue(this.utente?.dataNascita);    
    this.profilo.get('sesso').setValue(this.utente?.sesso);
    this.profilo.get('telefono').setValue(this.utente?.telefono);
    this.profilo.get('indirizzo').setValue(this.utente?.indirizzo);
  }

  SaveForm() {
    const ident = this.utente ? this.utente.id : undefined;
    const persona = new Persona(
      ident,
      this.profilo.get('nome').value,
      this.profilo.get('cognome').value,
      this.profilo.get('datanascita').value,
      this.profilo.get('sesso').value,
      this.profilo.get('telefono').value,
      this.profilo.get('indirizzo').value
    );
    if ( this.utente ) {
      this.modificaSub = this.personaservice.modificaUtente(persona).subscribe(
        (data: Persona) => 
        { this.utente = data;
        this.classDynamic = 'primary';
        this.alertShow = true;
        this.htmlIcon = 'fas fa-check-circle';
        this.headF = 'Profilo salvato! ';
        this.bodyF = 'Ben fatto, l\'utente '+ this.utente.nome + ' ' + this.utente.cognome +' è stato salvato correttamente.'; }, 
        error => 
        { this.personaservice.httpError;
        this.classDynamic = 'danger';
        this.alertShow = true;
        this.htmlIcon = 'fas fa-thumbs-down';
        this.headF = 'Niente da fare! ';
        this.bodyF = 'Qualcosa è andato storto...';
        },
        );
      setTimeout(()=>{
        this.alertShow = false;
      }, 4000);
    }
    else {
      this.profilo.reset();
      this.creaSub = this.personaservice.creaUtente(persona).subscribe(
        (data: Persona) => 
        { this.utente = data;
        this.alertShow = true;
        this.classDynamic = 'success'; 
        this.htmlIcon = 'fas fa-check-circle';
        this.headF = 'Profilo creato! ';
        this.bodyF = 'Ben fatto, l\'utente '+ this.utente.nome + ' ' + this.utente.cognome +' è stato creato correttamente.'; }, 
        error => 
        { this.personaservice.httpError;
        this.classDynamic = 'danger';
        this.alertShow = true;
        this.htmlIcon = 'fas fa-thumbs-down';
        this.headF = 'Niente da fare! ';
        this.bodyF = 'Qualcosa è andato storto...';
        },
        );
      setTimeout(()=>{
        this.alertShow = false;
      }, 4000);
    }
    
  }

  phoneValidator(): AsyncValidatorFn { return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.personaservice.checkPhone(control.value).pipe(
        map((exists: boolean) => {
          return exists ? { phoneCheck: true } : null;
        })
      )
    }
  }

  addAsyncValidator() {
    this.profilo.controls['telefono'].setAsyncValidators([this.phoneValidator()]);
  }

}
