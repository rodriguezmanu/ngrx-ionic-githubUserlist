import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as User from '../../app/actions/user';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {

  private user: Observable<any>;

  constructor(
    public navCtrl: NavController,
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
        this.user = this.store.select('users');
        this.store.dispatch(new User.LoadSingle(val));
      } else {
        this.user = null;
      }
    });
  }

  ionViewWillLeave() {
    this.storage.set('userId', null);
  }

  /**
   * Open IAB for web or blog
   * @param {String} url
   */
  openIab(url) {
    this.iab.create(url,  '_blank');
  }
}
