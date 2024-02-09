import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  showLoad = true;
  showAdmin: boolean;
  filtraCognome: string;
  headT:string;
  bodyT:string;
  role: string;
  email: string;
  roleSub: Subscription;
  page = 0;
  @ViewChild(ModalComponent)modalChild: ModalComponent;
  @Output() idOutput = new EventEmitter<number>();
  @Input() person: Persona[];

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

    this.roleSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.role = data.role;
        this.email = data.email;
      }
    })

    if (this.role === "admin") {
      this.showAdmin = true;
    } else if( this.role === "user") {
      this.showAdmin = false;
    }

  }

  address(persona: Persona) {
      this.headT = 'Indirizzo di ' + persona.nome + ' ' + persona.cognome;
      this.bodyT = persona.indirizzo;
      this.modalChild.show();
  }

  form(id?: number) {
    if (id) {
      this.router.navigate(['persona/form', id], { queryParams: { page: this.page + 1 } });
    }
    else {
      this.router.navigate(['persona/form'], { queryParams: { page: this.page + 2 } });
    }
  }

  remove(id: number) {
    this.idOutput.emit(id);
  }

}
