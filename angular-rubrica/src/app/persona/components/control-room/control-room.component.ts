import { Component, Input, OnInit } from '@angular/core';
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
  @Input() lengthPersona: number;

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
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
