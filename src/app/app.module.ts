import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//youtube video player goes here 
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
//admobfree


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AdMobFree } from '@ionic-native/admob-free/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdmobFreeService } from './services/admobfree.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    AdmobFreeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    YoutubeVideoPlayer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
