import MusicDataService from '../services/music-data-service'
export default class TrackDetailsViewModel {
  constructor (track){
    let service = new MusicDataService();
    this.artist = track.artist;
    this.name = track.name;
    this.imgUrl = service.getAlbumImage(track.id);
    this.id = track.id;
    this.comment = service.fetchComment(track.id);
  }
}
