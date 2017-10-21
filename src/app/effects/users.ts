import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { of } from 'rxjs/observable/of';
import * as UsersActions from '../actions/users';
import { GitHubService } from '../services/github.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$ : Actions,
    private gitHubService : GitHubService) {
  }

  @Effect() getUsers$ = this.actions$
    .ofType(UsersActions.LOAD)
    .switchMap(action =>
      this.gitHubService.getUsers((action as any).payload)
        .map(users => new UsersActions.LoadSuccess(users))
        .catch(() => of(new UsersActions.LoadFail([]))));
}
