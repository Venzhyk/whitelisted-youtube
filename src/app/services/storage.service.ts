import { Injectable } from '@angular/core';
import { Playlist } from './models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async fetchPlaylist(): Promise<Playlist> {
const vids = [
    'https://www.youtube.com/watch?v=WX8HmogNyCY&feature=youtu.be',
    'https://www.youtube.com/watch?v=G50zZpzQwjs&feature=youtu.be',
    'https://www.youtube.com/watch?v=JcRZHejCogg&feature=youtu.be',
    'https://www.youtube.com/watch?v=uF5mvB1f11E&feature=youtu.be',
    'https://www.youtube.com/watch?v=qcA3MTrlQL0&feature=youtu.be',
    'https://www.youtube.com/watch?v=0a7dfpihN6s&feature=youtu.be',
    'https://www.youtube.com/watch?v=yAhEL4MYejA&feature=youtu.be',
    'https://www.youtube.com/watch?v=sVdOuqwjqgQ&feature=youtu.be',
    'https://www.youtube.com/watch?v=l4WNrvVjiTw&feature=youtu.be',

]


    return new Playlist('12','Кадрики', [

      // {id:'WX8HmogNyCY', name:''},

      // {id:'G50zZpzQwjs', name:''},

      // {id:'JcRZHejCogg', name:''},

      // {id:'uF5mvB1f11E', name:''},

      {id:'qcA3MTrlQL0', name:''},

      // {id:'0a7dfpihN6s', name:''},

    //  {id:'yAhEL4MYejA', name:''},

      // {id:'sVdOuqwjqgQ', name:''},

      // {id:'l4WNrvVjiTw', name:''},
    ]);
  }

}
