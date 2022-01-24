import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import * as userAction from '../../store/action/user.actions';
import { userState } from '../../store/reducer/user.reducer';
import { selectUser } from '../../store/selector/user.selectors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userS: UserService, private store: Store<userState>, protected router: Router) {
    this.store.dispatch(userAction.getUsers());
    this.users$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {
  }

  delete(id:number) {
    if (confirm('Vuoi eliminare l\'utente selezionato?')) {
      this.store.dispatch(userAction.deleteUser({id}));
    }
  }

  userCard(){
    this.router.navigate(['home/card']);
  }

  form(id?:number) {
    if (id) {
      this.router.navigate(['home/form', id]);
    }
    else {
      this.router.navigate(['home/form']);
    }
  }
}
