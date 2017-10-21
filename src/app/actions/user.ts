import { Action } from '@ngrx/store';

export const LOAD = '[User] Load';
export const LOADSCROLL = '[User] Load Scroll';
export const LOAD_SUCCESS = '[User] Load Success';
export const LOAD_FAIL = '[User] Load Fail';
export const LOADSINGLE = '[User] Load User';
export const LOADSINGLE_SUCCESS = '[User] Load User Success';
export const LOADSINGLE_FAIL = '[User] Load User Fail';

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

export class LoadSingle implements Action {
  readonly type = LOADSINGLE;

  constructor(public payload) {}
}

export class LoadSingleSuccess implements Action {
  readonly type = LOADSINGLE_SUCCESS;

  constructor(public payload) {}
}

export class LoadSingleFail implements Action {
  readonly type = LOADSINGLE_FAIL;

  constructor(public payload) {}
}

export type All
  = Load
  | LoadFail
  | LoadSuccess
  | LoadScroll
  | LoadSingle
  | LoadSingleFail
  | LoadSingleSuccess;
