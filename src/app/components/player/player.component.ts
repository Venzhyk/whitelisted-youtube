import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { faPlay, faPause, faExpand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wlt-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  faPlay = faPlay;
  faFullScreen = faExpand;

  @ViewChild('youtube') youtube: YouTubePlayer;
  @ViewChild('playerwrapper') wrapper: ElementRef;
  @Input() public videoId: string;


  get videoIsPlaying(): boolean { return YT.PlayerState.PLAYING == this.youtube.getPlayerState() }

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  public play() {
    if (this.videoIsPlaying) {
      this.youtube.pauseVideo();
      this.faPlay = faPlay;
    } else {
      this.youtube.playVideo();
      this.faPlay = faPause;
    }
  }
  public fullScreen() {
    if (!this.videoIsPlaying) {
      return;
    }

    let playerFrame = document.querySelector('youtube-player#player iframe');
    this.openFullscreen(playerFrame);
  }

  public max(a: number, b: number) {
    return Math.max(a, b);
  }

  private openFullscreen(elem: any) {
    if (!elem) {
      return;
    }
    let requestFullscreen = elem.requestFullscreen
      || elem.mozRequestFullScreen
      || elem.webkitRequestFullscreen
      || elem.msRequestFullscreen;
    if (requestFullscreen) {
      requestFullscreen.bind(elem)();
    }
  }

}
