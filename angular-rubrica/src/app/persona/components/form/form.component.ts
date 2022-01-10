import { Component,OnInit,SimpleChanges,ViewChild} from '@angular/core';
import { Persona } from '../../model/persona';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { filtronumeri } from '../../validator/filtronumeri.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona/services/persona.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { Observable, Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/persona/validator/custom-validators';
import { map } from 'rxjs/operators';
import { Sesso } from 'src/app/persona/model/sesso';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{

  utente: Persona;
  sesso: Sesso;
  profilo: FormGroup;
  alertShow: boolean;
  showLoad: boolean = false;
  idValue: number;
  page: number;
  titleValue: string;
  headF: string; 
  bodyF: string;
  htmlIcon: string;
  idSub: Subscription; 
  titleSub: Subscription; 
  pageSub: Subscription;
  modificaSub: Subscription;
  creaSub: Subscription; 
  classDynamic: any;

  
  constructor(private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private personaservice: PersonaService, private router: Router) {}

  ngOnInit(): void {
    
    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      datanascita: [undefined,[Validators.required]],
      sesso: [undefined,[Validators.required]],
      indirizzo: [undefined],
      telefono: [undefined, [], [this.phoneValidator()]],
    }, { validators:CustomValidators.phoneAddress });

    this.idSub = this._ActivatedRoute.params.subscribe(prm => {
      this.idValue = +prm.id;
    })
    this.titleSub = this._ActivatedRoute.data.subscribe(data => {
      this.titleValue=data.title;
    })
    this.pageSub = this._ActivatedRoute.queryParams.subscribe(param => {
      this.page = +param['page'];
    });

    if ( this.idValue ) {
      this.showLoad=true;
      setTimeout( () => {
        this.personaservice.getUtente(this.idValue).subscribe((data: Persona) => {
        this.utente = data;
        this.setProfilo();
        this.showLoad = false;
        })
      },300);
    } else {
      this.showLoad = true;
      setTimeout( () => { this.showLoad = false; },300);
    }

    this.estraiSesso();
    
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

  estraiSesso() {
    this.personaservice.getSesso().subscribe((data: Sesso) => {
      this.sesso = data;
    })
  }
  
  setProfilo() {
    this.profilo.get('nome').setValue(this.utente?.nome);
    this.profilo.get('cognome').setValue(this.utente?.cognome);
    this.profilo.controls['datanascita'].setValue(this.utente?.dataNascita);    
    this.profilo.get('sesso').setValue(this.utente?.sesso);
    this.profilo.controls['telefono'].clearAsyncValidators();
    this.profilo.get('telefono').setValue(this.utente?.telefono);
    this.profilo.controls['telefono'].setAsyncValidators([this.phoneValidator(this.utente?.telefono)]);
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

  phoneValidator(telefono?: number): AsyncValidatorFn { 
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if ( !control || !control.value || control.value === telefono ) {
        return new Observable<null>();
      }
      return this.personaservice.checkPhone(control.value).pipe(
        map((exists: boolean) => {
          return exists ? { phoneCheck: true } : null;
        })
        
      )
    }
  }

  back() {
    this.router.navigate(['persona']);
  }

}
