import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';

import { GitHubService } from '../../app/services/github.service';

import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as User from '../../app/actions/user';

@Component({
  selector: 'page-user',
  templateUrl: 'users.html'
})
export class UserPage implements OnInit {
  users: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private store: Store<any>,
    private gitHubService: GitHubService
  ) {
    //take a look
    this.store.dispatch(new User.Load());
    this.users = this.store.select('users');
  }

  ngOnInit(): void {
  }

  /**
   * Scroll down users -> get new list
   */
  onScroll() {
    console.log('scroll');
  }

  /**
   * Get Users
   * @return {[type]} [description]
   */
  // getUsers() {
  //   this.users = this.gitHubService.getUsers();
  //   this.users.subscribe(
  //     users => this.users = users,
  //     error =>  this.errorMessage = <any>error);
  // }
}
