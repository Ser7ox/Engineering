import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from '../reducer/user.reducer';
import { userState } from '../reducer/user.reducer';

export const selectUserState = createFeatureSelector<userState>(userFeatureKey);

export const selectUser = createSelector(
  selectUserState,
  (state: userState) => state?.users
);


