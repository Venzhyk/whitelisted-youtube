import { Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { faPlay, faPause, faExpand, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wlt-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, AfterViewInit {

  @ViewChild('youtube') youtube: YouTubePlayer;
  @Input() public videoId: string;
  @Input() public autoplay: boolean;
  @Input() public width: number = 1280;
  @Input() public height: number = 720;
  @Output() videoEnded = new EventEmitter();



  get videoIsPlaying(): boolean { return YT.PlayerState.PLAYING == this.youtube.getPlayerState() }

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    let prevstate: YT.PlayerState | undefined = YT.PlayerState.ENDED;
    const vals = {
      '-1': 'UNSTARTED',
      '0': 'ENDED',
      '1': 'PLAYING',
      '2': 'PAUSED',
      '3': 'BUFFERING',
      '5': 'CUED',
      '100': 'Undefined'
    }
    setInterval(() => {
      if (!this.youtube) {
        return;
      }
      let state = this.youtube.getPlayerState();

      if (prevstate !== state) {
        prevstate = state;
        console.log('Player: ', vals[prevstate || 100]);
      }

      switch (state) {
        case YT.PlayerState.ENDED:
          this.videoEnded.emit();
          break;
        case YT.PlayerState.CUED:
          this.autoplay && this.play();
          break;
        case undefined:
          this.videoId && this.videoEnded.emit();
          break;
      }
    }, 300);
  }


  public play() {
    if (this.videoIsPlaying) {
      this.youtube.pauseVideo();
    } else {
      this.youtube.playVideo();
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
