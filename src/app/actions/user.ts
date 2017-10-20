import { Action } from '@ngrx/store';

export const LOAD = '[User] Load';
export const LOADSCROLL = '[User] Load Scroll';
export const LOAD_SUCCESS = '[User] Load Success';
export const LOAD_FAIL = '[User] Load Fail';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload) {}
}

export class LoadScroll implements Action {
  readonly type = LOADSCROLL;

  constructor(public payload) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload) {}
}

export type All
  = Load
  | LoadFail
  | LoadSuccess
  | LoadScroll;
