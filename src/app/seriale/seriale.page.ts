import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AdmobFreeService } from '../services/admobfree.service';
@Component({
  selector: 'app-seriale',
  templateUrl: './seriale.page.html',
  styleUrls: ['./seriale.page.scss'],
})
export class SerialePage {

  constructor(private youtube: YoutubeVideoPlayer,private admobFreeService: AdmobFreeService) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }

  ngOnInit(){
    this.admobFreeService.BannerAd();
  }

  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }

}

