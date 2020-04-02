
export type Video = {id: string, name: string}

export class Playlist {
    constructor(
      public id: string,
      public title: string,
      public videos: Video[]
      ) {
    }
}


export class User {
  constructor(
    public id: string,
    public name: string,
    public photoUrl: string,
  ){}
}
