import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { GitHubService } from './services/github.service';

import { reducer } from './reducers/user';
import { UsersEffects } from './effects/user';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UserPage } from '../pages/users/users';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    FeedPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    FormsModule,
    InfiniteScrollModule,
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
   })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    FeedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GitHubService
  ]
})
export class AppModule {}
