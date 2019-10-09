import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AdmobFreeService } from '../services/admobfree.service';
@Component({
  selector: 'app-filma',
  templateUrl: './filma.page.html',
  styleUrls: ['./filma.page.scss'],
})
export class FilmaPage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer,private admobFreeService: AdmobFreeService) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }

  ngOnInit(){
      this.admobFreeService.BannerAd();
    }

}
