//Program to create a jukebox to display and playback, stop different
//songs.
// npm install musicmetadata;

// var newSong = document.getElementsByClassName("SongList");

// newSong[0].src = "data/TheScientist.mp3";
// window.onload = StartJukeBox;
console.log("js running")
alert("js running");
function func1() {
  console.log("This is the first.");
}
window.onload=StartJukeBox();

function StartJukeBox() {
	start = document.getElementsByClassName("start-button")[0];
	start.addEventListener("click", function() {
		var songs = [];
		console.log("button clicked");
		var inputBtn = document.getElementsByClassName("input-div")[0];
		start.style.visibility = "hidden";
		inputBtn.style.visibility = "visible"
		InputSongs(inputBtn,songs);
		console("From InputSongs");
		console.log(songs);
	})
}

function InputSongs(inbtn,lines) {
   var file = this.files[0];
   var reader = new FileReader();
   reader.onload = function(progressEvent,lines){
      lines = this.result.split('\n');
      lines.pop(); //blank entry at the end
      console.log("in onload");
      console.log(lines);
     };
   reader.readAsText(file);
   console.log("after read");
   console.log(lines);
}

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
