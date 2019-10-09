import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-tom',
  templateUrl: './tom.page.html',
  styleUrls: ['./tom.page.scss'],
})
export class TomPage  {

  constructor(private youtube: YoutubeVideoPlayer) { }

  watch(watch){
    this.youtube.openVideo(watch);
  }

}
