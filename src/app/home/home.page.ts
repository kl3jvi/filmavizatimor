import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AdmobFreeService } from '../services/admobfree.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage    {
  
  slidesOptions = {
    slidesPerView: 3
  };

  constructor(private youtube: YoutubeVideoPlayer,private admobFreeService: AdmobFreeService) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }

  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }

}
