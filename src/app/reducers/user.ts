import * as UserActions from '../actions/user';
import { User } from '../models/user';

export type Action = UserActions.All;

export function reducerUser(state = User, action: Action) {
  switch(action.type) {

    case UserActions.LOADSINGLE_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
