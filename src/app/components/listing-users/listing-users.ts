import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as Users from '../../actions/users';
import { OnInit } from '@angular/core';

@Component({
  selector: 'listing-users',
  templateUrl: 'listing-users.html'
})
export class ListingUsers implements OnInit {
  private users: Observable<any>;
  private sum = 20;

  constructor(
    private navCtrl: NavController,
    private store: Store<any>,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    //clean userid to prevent errors
    this.storage.set('userId', null);

    this.store.dispatch(new Users.Load(this.sum));
    this.users = this.store.select('users');
  }

  /**
   * Scroll down users in order to get new list
   */
  onScroll() {
    this.sum += 10;
    this.store.dispatch(new Users.Load(this.sum));
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
