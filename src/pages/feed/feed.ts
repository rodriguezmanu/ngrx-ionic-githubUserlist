import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {
  }

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.storage.get('userId').then((val) => {
      if (val !== null) {
          //dispatch search by id ngrx
      }
    });
  }

  ionViewWillLeave() {
    this.storage.set('userId', null);
  }
}
