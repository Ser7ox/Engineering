import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { userState } from '../../store/reducer/user.reducer';
import { selectUser } from '../../store/selector/user.selectors';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  
  users$: Observable<User[]>;

  constructor(protected router: Router, private store: Store<userState>) {
    this.users$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {}
}
