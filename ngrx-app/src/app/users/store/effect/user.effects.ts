import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../service/user.service';
import { deleteUser, deleteUserError, deleteUserSuccess, getUsers, getUsersError, getUsersSuccess } from '../action/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(() => this.userService.getUsers().pipe(
        map(users => getUsersSuccess({users})),
        catchError(() => of(getUsersError()))
      ))
    )
  );
  
  deleteUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteUser),
    switchMap((action) => this.userService.deleteUser(action.id).pipe(
      map(() => deleteUserSuccess()),
      catchError(() => of(deleteUserError()))
    ))
  ))

}
