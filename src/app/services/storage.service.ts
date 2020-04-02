import { Injectable } from '@angular/core';
import { Playlist } from './models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async fetchPlaylist(): Promise<Playlist> {
    return new Playlist('12','Random videos', [
      {id: 'G-BBOZbToAk',name:'in my living room'},
      {id: 'uCK67WV869Q',name:'РАЗОБЛАЧЕНИЯ ПОПУЛЯРНЫХ ФОКУСОВ'},
      {id: 'IFgZxR7wnKU',name:'ДМБ овощная база'},
      {id: 'qn0XmoE-UNE',name:'дмб - а нам оружие дадут?'}
    ]);
  }

}
