import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user.model';

export const getUsers = createAction('Get Users');
export const getUsersSuccess = createAction('Get Users Success', props<{users: User[]}>());
export const getUsersError = createAction('Get Users Error');

export const getUser = createAction('Get User', props<{id: number}>());
export const getUserSuccess = createAction('Get User Success', props<{users: User[]}>());
export const getUserError = createAction('Get User Error');

export const updateUser = createAction('Update User', props<{user: User}>());
export const updateUserSuccess = createAction('Update User Success', props<{users: User[]}>());
export const updateUserError = createAction('Update User Error');

export const newUser = createAction('New User', props<{user: User}>());
export const newUserSuccess = createAction('New User Success', props<{users: User[]}>());
export const newUserError = createAction('New User Error');

export const deleteUser = createAction('Delete User', props<{id: number}>());
export const deleteUserSuccess = createAction('Delete User Success');
export const deleteUserError = createAction('Delete User Error');

export const addUsers = createAction('[User] Add Users',(users: User) => ({users}));




