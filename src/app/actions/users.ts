import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD = '[User] Load';
export const LOAD_SUCCESS = '[User] Load Success';
export const LOAD_FAIL = '[User] Load Fail';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: number) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: User[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}


export type All
  = Load
  | LoadFail
  | LoadSuccess;
