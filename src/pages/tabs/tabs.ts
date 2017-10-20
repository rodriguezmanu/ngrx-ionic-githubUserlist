import { Component } from '@angular/core';

import { UserPage } from '../users/users';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  usersRoot = UserPage;
  feedRoot = FeedPage;

  constructor() {

  }
}
