import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() FormPerson: Persona;
  profilo = this.fb.group({
    nome: [''],
    cognome: [''],
    sesso: [''],
    indirizzo: [''],
    telefono: [''],
  });
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
