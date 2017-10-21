import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { of } from 'rxjs/observable/of';
import * as UserActions from '../actions/user';
import { GitHubService } from '../services/github.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$ : Actions,
    private gitHubService : GitHubService) {
  }

  @Effect() getUsers$ = this.actions$
    .ofType(UserActions.LOAD)
    .switchMap(action =>
      this.gitHubService.getUsers()
        .map(users => new UserActions.LoadSuccess(users))
        .catch(() => of(new UserActions.LoadFail([]))));

  @Effect() getUsersScroll$ = this.actions$
    .ofType(UserActions.LOADSCROLL)
    .switchMap(action  =>
      this.gitHubService.getUsers((action as any).payload)
        .map(users => new UserActions.LoadSuccess(users))
        .catch(() => of(new UserActions.LoadFail([]))));

  @Effect() getUser$ = this.actions$
    .ofType(UserActions.LOADSINGLE)
    .switchMap(action  =>
      this.gitHubService.getSingleUser((action as any).payload)
        .map(user => new UserActions.LoadSingleSuccess(user))
        .catch(() => of(new UserActions.LoadSingleFail([]))));
}
