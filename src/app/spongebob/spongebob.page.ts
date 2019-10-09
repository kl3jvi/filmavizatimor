import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-spongebob',
  templateUrl: './spongebob.page.html',
  styleUrls: ['./spongebob.page.scss'],
})
export class SpongebobPage {

  constructor(private youtube: YoutubeVideoPlayer) { }

  watch(watch){
    this.youtube.openVideo(watch);
  }

}
