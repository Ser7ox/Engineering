import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';
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
  showLoad = true;
  loaders = this.loader.loadersFor('persona');

  constructor(private personaS: PersonaService, private personaQuery: PersonaQuery, protected router: Router, private loader: NgEntityServiceLoader) {}

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

  usersCard(persona: Persona[]) {
    this.router.navigate(['home/card'], { state: { usersCard: persona }});
  }

  form(id?: ID) {
    if (id) {
      this.router.navigate(['home/form', id]);
    }
    else {
      this.router.navigate(['home/form']);
    }
  }

}
