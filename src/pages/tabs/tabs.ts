import { Component } from '@angular/core';
import { UserPage } from '../users/users';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  usersRoot = UserPage;
  feedRoot = FeedPage;

  constructor() {

  }
}
