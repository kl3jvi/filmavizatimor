import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-masha',
  templateUrl: './masha.page.html',
  styleUrls: ['./masha.page.scss'],
})
export class MashaPage  {

  constructor(private youtube: YoutubeVideoPlayer) {}

  watch(watch){
    this.youtube.openVideo(watch);
  }

}
