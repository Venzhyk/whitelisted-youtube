import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Playlist } from './models';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private store: StorageService) { }

  public async getPlaylist(): Promise<Playlist> {
    return await this.store.fetchPlaylist();
  }

}
