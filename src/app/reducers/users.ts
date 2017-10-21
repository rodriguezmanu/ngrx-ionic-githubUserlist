import * as UsersActions from '../actions/users';
import { User } from '../models/user';

export type Action = UsersActions.All;

export function reducerUsers(state = [User], action: Action) {
  switch(action.type) {
    case UsersActions.LOAD_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
