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
  persona?: Observable<Persona[]>;
  constructor(private personaS: PersonaService, private personaQuery: PersonaQuery, protected router: Router) {}

  ngOnInit(): void {
    this.personaS.getPersone();
    this.persona = this.personaQuery.selectAll();
  }
  title = 'Akita state manager';

  home() {
    this.router.navigate(['home/table']);
  }
}
