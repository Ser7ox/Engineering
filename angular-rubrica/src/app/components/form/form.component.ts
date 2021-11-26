import { Component,OnInit,Input,SimpleChanges,Output,EventEmitter,} from '@angular/core';
import { Persona } from '../../model/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filtronumeri } from '../../validator/filtronumeri.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() FormPerson: Persona;
  @Output() outputP = new EventEmitter<Persona>();
  profilo: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      cognome: [undefined,[Validators.required, Validators.minLength(3), Validators.maxLength(20), filtronumeri]],
      sesso: [undefined],
      telefono: [undefined],
      indirizzo: [undefined],
    });

    this.setProfilo();
  }

  setProfilo() {
    this.profilo.get('nome').setValue(this.FormPerson?.nome);
    this.profilo.get('cognome').setValue(this.FormPerson?.cognome);
    this.profilo.get('sesso').setValue(this.FormPerson?.sesso);
    this.profilo.get('telefono').setValue(this.FormPerson?.telefono);
    this.profilo.get('indirizzo').setValue(this.FormPerson?.indirizzo);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.profilo) {
      this.setProfilo();
    }
  }

  SaveForm() {
    const persona = new Persona(
      this.FormPerson.id,
      this.profilo.get('nome').value,
      this.profilo.get('cognome').value,
      this.profilo.get('sesso').value,
      this.profilo.get('telefono').value,
      this.profilo.get('indirizzo').value
    );
    this.outputP.emit(persona);
    
  }
}
