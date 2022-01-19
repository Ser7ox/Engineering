import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from './persona/model/persona.model';
import { PersonaService } from './persona/service/persona.service';
import { PersonaQuery } from './persona/store/persona.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persona: Persona[];

  constructor(private personaS: PersonaService, private personaQuery: PersonaQuery, protected router: Router) {}

  ngOnInit(): void {
    this.personaQuery.selectAll().subscribe(data => {
      this.persona = data;
    })
  }
  
  title = 'akita-app';

  home() {
    this.router.navigate(['home/table']);
  }

  usersCard() {
    this.router.navigate(['home/card'],{ state: { usersCard: this.persona }});
  }
}
