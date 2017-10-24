import * as UsersActions from '../actions/users';
import { User } from '../models/user';

export type Action = UsersActions.All;

export interface State {
  loading: boolean;
  users: User[];
}

const initialState: State = {
  loading: false,
  users: []
}

export function reducerUsers(state = initialState, action: Action): State {
  switch(action.type) {
    case UsersActions.LOAD: {
      console.log(state, action)
      return {
        ...state,
        loading: true,
      }
    }
    case UsersActions.LOAD_SUCCESS: {
      console.log(state, action)
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
