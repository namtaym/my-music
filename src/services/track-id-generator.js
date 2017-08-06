export function generateTrackId(artist, name){
    var trackString = artist + name;
    var hash = 0;
    if (trackString.length == 0) return hash.toString();

    for (let i = 0; i < trackString.length; i++) {
      var char = trackString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
