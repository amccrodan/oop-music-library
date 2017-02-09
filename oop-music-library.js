// Libraries
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.printInfo = function() {
  console.log(`Name: ${this.name} Creator: ${this.creator}`);
  console.log(`Num playlists: ${this.playlists.length}`);
}

Library.prototype.printPlaylists = function() {
 for (let playlist of this.playlists) {
  console.log(`${playlist.name} - ${playlist.tracks.length} track(s)`);
 }
}

Library.prototype.printAllTracks = function() {
  for (let playlist of this.playlists) {
    for (let track of playlist.tracks) {
      track.printTrack();
    }
  }
}

Library.prototype.addPlayList = function(playlist) {
  this.playlists.push(playlist);
}

Library.prototype.searchStringInTracks = function(searchString) {
  console.log(`Searched for "${searchString}". Results: `);
  for (let playlist of this.playlists) {
    for (let track of playlist.tracks) {
      if (track.searchInTrack(searchString)) {
        track.printTrack();
      }
    }
  }
}

// Playlists
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {

  if (this.tracks.length === 0) {
    return 0;
  }

  const numerator = this.tracks.reduce(function (a, track) {
    return a + track.rating;
  }, 0);
  return numerator/this.tracks.length;
}

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce(function (a, track) {
    return a + track.length;
  }, 0);
}

Playlist.prototype.printPlaylist = function() {
  console.log(`${this.name} - ${this.tracks.length} track(s):`);
  for (let track of this.tracks) {
    track.printTrack();
  }
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}


// Tracks
function Track(title, artist, album, rating, length) {
  this.title = title;
  this.artist = artist;
  this.album = album;
  this.rating = rating;
  this.length = length;
}

Track.prototype.printTrack = function() {
  console.log(`${this.title} by ${this.artist} (${this.album}) Rating: ${this.rating}/5 Length: ${this.length}s`);
}

Track.prototype.searchInTrack = function (searchStr) {
  var allText = (this.name + this.artist + this.album).toLowerCase();
  if (allText.search(searchStr.toLowerCase()) !== -1) {
    return true;
  }
  return false;
}


// TEST CODE

const library = new Library("Dope Library", "Andrew");

const playlist1 = new Playlist("Cool List")
library.addPlayList(playlist1);
library.printInfo();
library.printPlaylists();

console.log("");

const track1 = new Track("Go With The Flow", "QOTSA", "Songs for the Deaf", 5, 210);
const track2 = new Track("Gemini", "Death From Above 1979", "The Physical World", 5, 125);
const track3 = new Track("The Song That Doesn't End", "Lamb Chop", "Lamb Chop's Play-Along", 0, 9999);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.printPlaylist();

console.log(`Average rating: ${playlist1.overallRating()}`);
console.log(`Total duration: ${playlist1.totalDuration()}\n`);

library.searchStringInTracks("on");