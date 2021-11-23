import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Persona } from '../persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      nome: [
        undefined,
        [
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      cognome: [
        undefined,
        [
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
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
