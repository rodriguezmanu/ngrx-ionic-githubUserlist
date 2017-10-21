import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as UserActions from '../../app/actions/user';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { User } from '../../app/models/user';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {

  private user: Observable<User>;
  private userLogin;

  constructor(
    private storage: Storage,
    private store: Store<any>,
    private iab: InAppBrowser
  ) {
  }

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.storage.get('userId').then((val) => {
      if (val !== null) {
        this.store.dispatch(new UserActions.LoadSingle(val));

        this.store.select('user').subscribe(data => {
          if (data) {
            this.user = data;

            //set login user to search bar
            this.userLogin = data.login;
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  /**
   * In order to clean store ID
   */
  ionViewWillLeave() {
    this.storage.set('userId', null);
    this.userLogin = '';
  }

  /**
   * Open IAB for web or blog
   * @param {String} url
   */
  openIab(url) {
    this.iab.create(url,  '_blank');
  }

  /**
   * Search login user
   * @param {Object} $event
   */
  searchUser($event) {
    this.store.dispatch(new UserActions.LoadSingle(this.userLogin));

    this.store.select('users').subscribe(data => {
      if (data) {
        this.user = data;
      }
    });
  }
}
