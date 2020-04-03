import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Video, Playlist } from '../services/models';
import { YouTubePlayer } from '@angular/youtube-player';
import { PlayerComponent } from '../components/player/player.component';
import { Observable } from 'rxjs';
import { faExpand, faStepForward, faStepBackward, faPlay } from '@fortawesome/free-solid-svg-icons';
import { PlaylistComponent } from '../components/playlist/playlist.component';

@Component({
  selector: 'wlt-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  faPlay = faPlay;
  faFullScreen = faExpand
  faStepForward = faStepForward;
  faStepBackward = faStepBackward;

  public playlist: Playlist;

  @ViewChild('player') player: PlayerComponent;
  @ViewChild('pl') pl: PlaylistComponent;

  constructor(private playlists: PlaylistService) {
    this.playlists.getPlaylist()
      .then(p => {
        this.playlist = p;
      });
  }

  ngOnInit(): void {

  }


  prev() {
    this.pl.prev();
  }
  next() {
    this.pl.next();
  }
  play() {
    this.player.play();
  }
  fullScreen() {
    this.player.fullScreen();
  }

  public selectVideo(event: any) {
    if (this.player) {
      this.player.videoId = event;
      this.player.play();
    }
  }

}
