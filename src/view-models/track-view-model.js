import {generateTrackId} from "../services/track-id-generator"
export default class TrackViewModel {
  constructor (artist, genre, lastPlayed, name, stars){
    this.artist = artist;
    this.genre = genre;
    this.lastPlayed = lastPlayed;
    this.name = name;
    this.stars = stars;
    this.id = generateTrackId(artist, name);
  }
}
