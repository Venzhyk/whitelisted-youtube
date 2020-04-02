import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Video, Playlist } from '../services/models';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'wlt-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  public playlist: Playlist;

  constructor(private playlists: PlaylistService) { }

  ngOnInit(): void {
    this.playlists.getPlaylist().then(p => {
      this.playlist = p;
    });
  }

  public selectVideo(event: any) {
    console.log(event)
  }

}
