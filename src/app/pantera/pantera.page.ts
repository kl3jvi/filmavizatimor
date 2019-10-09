import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-pantera',
  templateUrl: './pantera.page.html',
  styleUrls: ['./pantera.page.scss'],
})
export class PanteraPage {

  constructor(private youtube: YoutubeVideoPlayer) { }

  watch(watch){
    this.youtube.openVideo(watch);
  }

}
