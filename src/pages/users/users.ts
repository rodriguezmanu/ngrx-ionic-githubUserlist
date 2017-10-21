import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GitHubService } from '../../app/services/github.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as User from '../../app/actions/user';

@Component({
  selector: 'page-user',
  templateUrl: 'users.html'
})
export class UserPage {
  private users: Observable<any>;
  private sum = 20;

  constructor(
    private navCtrl: NavController,
    private store: Store<any>,
    private gitHubService: GitHubService,
    private storage: Storage
  ) {
  }

  ionViewDidEnter() {
    this.store.dispatch(new User.Load(this.sum));
    this.users = this.store.select('users');
  }

  /**
   * Scroll down users in order to get new list
   */
  onScroll() {
    this.sum += 10;
    this.store.dispatch(new User.LoadScroll(this.sum));
  }

  /**
   * Go to feed tab
   * @param {String} id user
   */
  gotoFeed(id) {
    this.storage.set('userId', id);
    this.navCtrl.parent.select(1);
  }
}
