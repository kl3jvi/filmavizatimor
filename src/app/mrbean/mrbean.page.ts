import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-mrbean',
  templateUrl: './mrbean.page.html',
  styleUrls: ['./mrbean.page.scss'],
})
export class MrbeanPage {

  constructor(private youtube: YoutubeVideoPlayer) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }
}