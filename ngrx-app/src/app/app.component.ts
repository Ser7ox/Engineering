import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx-app';

  constructor(protected router: Router) {}

  home() {
    this.router.navigate(['home/table']);
  }

  usersCard() {
    this.router.navigate(['home/card']);
  }
}
