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
export class UserEffects {
  constructor(
    private actions$ : Actions,
    private gitHubService : GitHubService) {
  }

  @Effect() getUser$ = this.actions$
    .ofType(UserActions.LOADSINGLE)
    .switchMap(action  =>
      this.gitHubService.getSingleUser((action as any).payload)
        .map(user => new UserActions.LoadSingleSuccess(user))
        .catch(() => of(new UserActions.LoadSingleFail([]))));
}
