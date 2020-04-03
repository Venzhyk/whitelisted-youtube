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

  public _selectedVideoId: string;
  public get selectedVideoId(): string { return this._selectedVideoId; };

  public set selectedVideoId(videoId: string) { this._selectedVideoId = videoId; this.videoSelected.emit(this._selectedVideoId); };

  _playlist: Playlist;
  @Input() public set playlist(p: Playlist) {
    this._playlist = p;
    if (p?.videos?.length > 0)
      this.selectedVideoId = p.videos[0].id;
  };
  public get playlist(): Playlist {
    return this._playlist;
  };

  @Output() public videoSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.playlist = new Playlist('', 'None', [])
  }

  ngOnInit(): void {

  }


  public prev() {
    let videos = [...this.videos].reverse();
    this.nextInternal(videos);
  }

  public next() {
    this.nextInternal(this.videos);
  }

  private nextInternal(videos: Video[]) {
    let itIsNextVideo = false;
    let nextIsSelected = false;

    for (let v of videos) {
      if (itIsNextVideo) {
        this.selectedVideoId = v.id;
        nextIsSelected = true;
        break;
      }
      if (v.id == this.selectedVideoId) {
        itIsNextVideo = true;
      }
    }

    if (!nextIsSelected && this.videos.length > 0) {
      this.selectedVideoId = this.videos[0].id;
    }
  }

  public selectVideo(video: Video) {
    this.selectedVideoId = video.id;
  }
}
