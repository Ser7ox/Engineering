import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'tabella',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  showLoad: boolean = true;
  showAdmin: boolean;
  person:Persona[] = [];
  filterName: string;
  headT:string;
  bodyT:string;
  role: string;
  email: string;
  roleSub: Subscription;
  page = 0;
  @ViewChild(ModalComponent)child: ModalComponent;
  @Output() idToPass = new EventEmitter<number>();

  constructor(private personaService: PersonaService, private localStorageService: LocalStorageService, private router: Router) { }

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

    this.estraiUsers();
  }

  estraiUsers() {
    setTimeout(()=>{
      this.personaService.getUtenti().subscribe((data: Persona[]) => {
        this.showLoad = false;
        this.person = data;
      })
    }, 300);
  }

  address(id: number) {
    let address: string;
    this.personaService.getUtente(id).subscribe((data: Persona) => {
      address = data.indirizzo;
      this.headT = 'Indirizzo di ' + data.nome + ' ' + data.cognome;
      this.bodyT = address;
      this.child.show();
    })
  }

  form(id?: number){
    if (id) {
      this.router.navigate(['persona/form', id], { queryParams: { page: this.page + 1 } });
    }
    else {
      this.router.navigate(['persona/form'], { queryParams: { page: this.page + 2 } });
    }
  }

  remove (id: number) {
    this.idToPass.emit(id);
    this.estraiUsers();
  }

}
