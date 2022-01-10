import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'controlRoom',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  persona: Persona[];
  lengthPersona: number;

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.personaService.getUtenti().subscribe((data:Persona[]) => {
      this.persona = data;
      this.lengthPersona = this.persona.length;
    })
  }

  form(id?: number){
    if (id) {
      this.router.navigate(['persona/form', id]);
    }
    else {
      this.router.navigate(['persona/form']);
    }
  }

}
