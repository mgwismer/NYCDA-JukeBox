//Program to create a jukebox to display and playback, stop different
//songs.
// npm install musicmetadata;

var newSong = document.getElementsByClassName("SongList");

newSong[0].src = "data/TheScientist.mp3";

document.getElementById('fileInput').onchange = function(){
   var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    alert(this.result);
   // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      alert(lines[line]);
    }
    console.log(lines);
  };
  reader.readAsText(file);
};

function Jukebox(name) {
	this.name = name;
	this.songs = [];
	this.addSong = function(song) {
		this.songs.push(song);
	}
	this.addSongs = function(songs) {
		this.songs = this.songs.concat(songs);
	}
	this.chooseSong = function(song) {

	}
}

function Song(name, location, artist) {
   this.artist = artist;
   this.name = name;
   this.location = location;
   this.play = function playSong() {

   }
   this.stop = function stopSong() {

   }
}

// var song1 = new Song
