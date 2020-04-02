import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video, Playlist } from 'src/app/services/models';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wlt-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {

  public faPlus = faPlus;

  public get title(): string { return this.playlist?.title; };
  public get videos(): Video[] { return this.playlist?.videos; };

  public selectedVideoId: string;

  _playlist: Playlist;
  @Input() public set playlist(p: Playlist) {
    this._playlist = p;
    if (p?.videos?.length > 0)
      this.selectedVideoId = p.videos[0].id;
  };
  public get playlist(): Playlist {
    return this._playlist;
  };

  @Output() public videoSelected: EventEmitter<Video> = new EventEmitter<Video>();

  constructor() {
    this.playlist = new Playlist('', 'None', [])
  }

  ngOnInit(): void {

  }

  public selectVideo(video: Video) {
    this.videoSelected.emit(video);
    this.selectedVideoId = video.id;
  }
}
