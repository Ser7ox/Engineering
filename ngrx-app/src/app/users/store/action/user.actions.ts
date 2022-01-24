import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user.model';

export const getUsers = createAction('[User List] Get Users');
export const getUsersSuccess = createAction('[User List] Get Users Success', props<{users: User[]}>());
export const getUsersError = createAction('[User List] Get Users Error');

export const deleteUser = createAction('Delete User', props<{id: number}>());
export const deleteUserSuccess = createAction('Delete User Success');
export const deleteUserError = createAction('Delete User Error');

export const addUsers = createAction('[User] Add Users',(users: User) => ({users}));




