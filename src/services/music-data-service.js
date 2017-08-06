import axios from 'axios'


export default class MusicDataService{

  getPlayList(){
    let api = axios.create( {baseURL:`https://vest-test-task.herokuapp.com`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        "Access-Control-Allow-Methods": "GET",
        'Access-Control-Allow-Origin': '*'
      }}
    )
   return api.get("playlist");
  }

  getMockedPlayList(){
    let playList = [
      {
        artist: "Major Lazer & M0 & DJ Snake",
        genre: "Pop",
        last_played: "8:40",
        name: "Lean On",
        stars: 5
      },
      {
        artist: "Sam Smith & A$AP Rocky",
        genre: "Rock",
        last_played: "8:34",
        name: "I'm Not The Only One",
        stars: 5
      },
      {
        artist: "Taylor Swift",
        genre: "Pop",
        last_played: "8:23",
        name: "Style",
        stars: 1
      },
      {
        artist: "Galantis",
        genre: "Hip Hop",
        last_played: "7:34",
        name: "Peanut Butter Jelly",
        stars: 3
      },
      {
        artist: "Wiz Khalifa & Charlie Puth",
        genre: "Pop",
        last_played: "7:18",
        name: "See You Again",
        stars: 4
      }
    ]

    return playList;
  }

  saveComment(text, storageKey){
    localStorage.setItem(storageKey, text);
  }

  fetchComment(trackId){
    let comment = localStorage.getItem(trackId) || '';
    return comment;
  }

  getAlbumImage(trackId){
   let images = [
      "http://www.udiscovermusic.com/wp-content/uploads/2015/10/Eat-a-Peach.jpg",
      "http://assets8.radiox.co.uk/2013/24/the-xx---xx-1371817761-hero-promo-0.jpg",
      "https://cdn.pastemagazine.com/www/blogs/lists/2010/12/13/klaxxons_surfing_the_void.jpg",
      "https://e-cdns-images.dzcdn.net/images/cover/4fbc04e5bf54f9884ea97497150254ef/264x264-000000-80-0-0.jpg"
    ];
      return  images[Math.floor(Math.random()*images.length)];
  }
}
