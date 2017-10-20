import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import * as UserActions from '../actions/user';
import { GitHubService } from '../services/github.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$ : Actions,
    private todosService : GitHubService) {
  }

  @Effect() getTodos$ = this.actions$
    .ofType(UserActions.LOAD)
    .switchMap(action =>
      this.todosService.getUsers()
        .map(users => new UserActions.LoadSuccess(users)));
}
