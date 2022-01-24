import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../model/user.model';
import * as userAction from '../../store/action/user.actions';
import { userState } from '../../store/reducer/user.reducer';
import { selectUser } from '../../store/selector/user.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  idSub: Subscription;
  titleSub: Subscription;
  profilo: FormGroup;
  headerForm: string;
  idValue: number;
  user: User;
  
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private store: Store<userState>, protected router: Router) { }

  ngOnInit(): void {

    this.profilo = this.fb.group({
      nome: [undefined,[Validators.required]],
      cognome: [undefined,[Validators.required]],
      indirizzo: [undefined,[Validators.required]],
    },);

    this.idSub = this.activatedRoute.params.subscribe(prm => {
      this.idValue = +prm['id'];
    })

    this.titleSub = this.activatedRoute.data.subscribe(data => {
      this.headerForm=data['title'];
    })

    this.store.pipe(select(selectUser)).forEach((element) => {
      element.forEach( (user) => {
        if (user.id === this.idValue) {
          this.user = user;
        }
      }) 
    })

    this.setProfilo();
  }

  ngOnDestroy() {
    if ( this.idSub ) {
      this.idSub.unsubscribe();
    }
    if ( this.titleSub) {
      this.titleSub.unsubscribe();
    }
  }

  setProfilo() {
    this.profilo.get('nome').setValue(this.user?.nome);
    this.profilo.get('cognome').setValue(this.user?.cognome);
    this.profilo.get('indirizzo').setValue(this.user?.indirizzo);
  }

  saveForm() {

  }

  back() {
    this.router.navigate(['home/table']);
  }
}
