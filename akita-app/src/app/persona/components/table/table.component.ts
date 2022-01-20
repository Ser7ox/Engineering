import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
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
  isLoading = this.personaQ.selectLoading();
  showLoad: boolean;
  error = this.personaQ.selectError();

  constructor(private personaS: PersonaService, private personaQ: PersonaQuery, protected router: Router) {}

  ngOnInit(): void {
    
    setTimeout(() => {
      this.personaS.getPersone();
      this.personaQ.selectAll().subscribe(data => {
        this.persona = data;
      })
    },300);

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
