import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../service/user.service';
import { deleteUser, deleteUserError, deleteUserSuccess, getUser, getUserError, getUsers, getUsersError, getUsersSuccess, getUserSuccess, newUser, newUserError, newUserSuccess, updateUser, updateUserError, updateUserSuccess } from '../action/user.actions';

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

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap((action) => this.userService.getUser(action.id).pipe(
        map((users) => getUserSuccess({users})),
        catchError(() => of(getUserError()))
      ))
  ))

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap(({user}) => this.userService.updateUser(user).pipe(
        map((users) => updateUserSuccess({users})),
        catchError(() => of(updateUserError()))
      ))
  ))

  newUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newUser),
      switchMap(({user}) => this.userService.newUser(user).pipe(
        map((users) => newUserSuccess({users})),
        catchError(() => of(newUserError()))
      ))
  ))
  
  deleteUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteUser),
    switchMap((action) => this.userService.deleteUser(action.id).pipe(
      map(() => deleteUserSuccess()),
      catchError(() => of(deleteUserError()))
    ))
  ))

}
