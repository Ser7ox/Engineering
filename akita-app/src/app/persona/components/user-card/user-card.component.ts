import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona/model/persona.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  persona: Persona[] = [];
  constructor(protected router: Router) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation?.extras.state as {usersCard: Persona[]};
    this.persona = state?.usersCard;
  }

  ngOnInit(): void {}

}
