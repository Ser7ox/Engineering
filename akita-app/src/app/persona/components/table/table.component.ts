import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private personaS: PersonaService, private personaQuery: PersonaQuery, protected router: Router) {}

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

  user() {
    this.router.navigate(['home/card']);
  }

  update(id?: number) {
    if (id) {
      this.router.navigate(['home/form', id]);
    }
    else {
      this.router.navigate(['home/form']);
    }
  }

}
