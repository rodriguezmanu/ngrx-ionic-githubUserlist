import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOADSINGLE = '[User] Load User';
export const LOADSINGLE_SUCCESS = '[User] Load User Success';
export const LOADSINGLE_FAIL = '[User] Load User Fail';

export class LoadSingle implements Action {
  readonly type = LOADSINGLE;

  constructor(public payload: string) {}
}

export class LoadSingleSuccess implements Action {
  readonly type = LOADSINGLE_SUCCESS;

  constructor(public payload: User) {}
}

export class LoadSingleFail implements Action {
  readonly type = LOADSINGLE_FAIL;

  constructor(public payload: any) {}
}

export type All
  = LoadSingle
  | LoadSingleFail
  | LoadSingleSuccess;
