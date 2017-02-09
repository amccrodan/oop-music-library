// Libraries
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.printPlaylists = function() {

}

Library.prototype.printAllTracks = function() {

}

Library.prototype.addPlayList = function() {

}

Library.prototype.searchStringInTracks = function(searchString) {

}

// Playlists
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {

}

Playlist.prototype.totalDuration = function() {

}

Playlist.prototype.printPlaylist = function() {

}

Playlist.prototype.addTrack = function(Track) {

}


// Tracks
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype.printTrack = function() {

}


// TEST CODE

const library = new Library("Dope Library", "Andrew");
console.log(library);

const playlist = new Playlist("Cool List")
console.log(playlist);

const track1 = new Track("Go With The Flow", "5", "210");
console.log(track1);