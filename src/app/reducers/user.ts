import * as UserActions from '../actions/user';

export type Action = UserActions.All;

export function reducer(state, action: Action) {
  switch(action.type) {
    case UserActions.LOAD_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
