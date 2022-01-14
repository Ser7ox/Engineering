import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona.model';
import { PersonaService } from '../../service/persona.service';
import { PersonaQuery } from '../../store/persona.query';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  persona: Persona[] = [];
  constructor(private personaS: PersonaService, private personaQuery: PersonaQuery) {}

  ngOnInit(): void {
    this.personaS.getPersone();
    this.personaQuery.selectAll().subscribe(data => {
      this.persona = data;
    })
  }

  delete(persona: Persona): void {
    const isConfirmed = confirm(`Rimuovi ${persona.nome} ` +  `${persona.cognome}`);
    if (!isConfirmed) {
      return;
    }
    this.personaS.removePersona(persona.id);
  }

}
