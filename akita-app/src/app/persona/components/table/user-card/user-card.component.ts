import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona/model/persona.model';
import { PersonaQuery } from 'src/app/persona/store/persona.query';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  persona: Persona[] = [];
  constructor(private personaQuery: PersonaQuery) { }

  ngOnInit(): void {
    this.personaQuery.selectAll().subscribe(data => {
      this.persona = data;
    })
  }

}
