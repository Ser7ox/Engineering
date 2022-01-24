import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../model/user.model';
import * as actionUsers from '../action/user.actions';
export const userFeatureKey = 'user';

export interface userState {
  users: User[];
}

export const initialState: userState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(actionUsers.getUsersSuccess,(state, { users }) => {
    return { ...state, users };
  }),
  on(actionUsers.deleteUser, (state, { id }) => {
    const updateUsers = state.users.filter(user => {
      return user.id !== id;
    })
    return {
      ...state,
      users: updateUsers
    }
  })
)

//export const getUser = (state: userState) => state.users;
//export const getId = (state: userIdState) => state.users.id;

export function reducer(state: userState | undefined, action: Action): any {
  return userReducer(state, action);
}
