//Program to create a jukebox to display and playback, stop different
//songs.
// npm install musicmetadata;

// var newSong = document.getElementsByClassName("SongList");

// newSong[0].src = "data/TheScientist.mp3";
// window.onload = StartJukeBox;
lines = []
window.onload=StartJukeBox(lines);

function StartJukeBox() {
	start = document.getElementsByClassName("start-button")[0];
	start.addEventListener("click", function() {
		var songs = [];
		var inputBtn = document.getElementsByClassName("input-div")[0];
		start.style.visibility = "hidden";
		inputBtn.style.visibility = "visible";
		InputSongs(inputBtn,function(songs){
			console.log(songs);
		});
		// console.log("From InputSongs");
		console.log(songs);
	})
}

function InputSongs(inbtn,callback) {
   document.getElementsByClassName("input-button")[0].onchange = function(lines) {	
   var file = this.files[0];
   var reader = new FileReader();
   reader.onload = function(){ 
   	callback(reader.result);
   }
     // var lines = this.result.split('\n');
     // callback(lines);
     // };
   reader.readAsText(file);
   console.log("after read");
   console.log(this.result);
   };
}

function callback(result) {
	var lines = result.split('\n');
	return lines;
}

function createSongs(songs) {
	for(var i = 0; i < songs.length; i++) {
		var song = new Song(songs[i]);
	}
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
