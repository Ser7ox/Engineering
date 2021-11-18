import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() FormPerson: Persona;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(formpersona: Persona) {
    this.FormPerson = formpersona;  
  }
}
