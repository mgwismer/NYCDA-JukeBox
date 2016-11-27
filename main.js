//Program to create a jukebox to display and playback, stop different
//songs.
// npm install musicmetadata;

// var newSong = document.getElementsByClassName("SongList");

// newSong[0].src = "data/TheScientist.mp3";
// window.onload = StartJukeBox;

window.onload=StartJukeBox();

function StartJukeBox(event) {
	start = document.getElementsByClassName("start-button")[0];
	var songs1 = [];
	start.addEventListener("click", function(songs1) {
		var songs = [];
		var inputBtn = document.getElementsByClassName("input-div")[0];
		start.style.visibility = "hidden";
		//Makes visible the "choose file" button. Not easy to re-style this button
		inputBtn.style.visibility = "visible";
        //Reads the list of songs from a file the user chooses. "songs" is an array 
        //with the names of the songs as listed in the file user chooses. 
		InputSongs(inputBtn,songs,function(songs) {
			// console.log("after callback")
			var songs1 = songs.split(".mp3\n");
			//console.log(songs.split(".mp3\n")[0]);
			console.log(songs1[0]);
			//Most of the program runs in this function
		    RunJukeBox(inputBtn, songs1);
		});	
	})
}

//User selects a file from her directory.
function InputSongs(inbtn,lines,callback) {
   document.getElementsByClassName("input-button")[0].onchange = function(lines) {	
   //"file" is the name of the file user selects.
   var file = this.files[0];
   var reader = new FileReader();
   reader.onload = function(){ 
   //needed to use a callback because file is read asynchronously
   callback(this.result,lines);
   //console.log(reader.result);
   }
   reader.readAsText(file,"UTF-8");
   };
}

function callback(result,lines) {
   // var names = result.toString();
//   var names = result.toString();
   lines = this.result.split(".mp3");
}

//This is where the user interfaces with the Jukebox and can play songs
//and list them.
function RunJukeBox(inputBtn, songs) {
	var songList = [];
	//For future make a function in which the user can input 
	var myJukeBox = new Jukebox("Margaret's Tunes");
	songlist = MakeSongList(songs);
	myJukeBox.addSongs(songlist);
	DisplayJukebox(myJukeBox);
	console.log("separate songs");
	console.log(songs[0]);
	//This can be the play and pause and button
//	LoadJukeBox(MakeSongList(songs),myJukeBox);
//	myJukeBox.listsongs();
}

function DisplayJukebox(jukebox) {
	ChangeHeading();
    DisplayJukeboxControls(jukebox);
}

//changes the h1 heading and hides the START and 
//choose file buttons.
function ChangeHeading() {
	var newGreeting = "Welcome to your Juke Box";
    var headline = document.getElementsByClassName('headline')[0];
    headline.innerHTML = newGreeting;
    var temp = document.getElementsByClassName('input-div')[0];
    temp.style.visibility = "hidden";
    temp = document.getElementsByClassName('directive')[0];
    temp.style.visibility = "hidden";
}

//Makes the jukeb0x-div visible
function DisplayJukeboxControls(jukebox) {
	CreateForm(jukebox);
    var temp = document.getElementsByClassName('jukebox-display')[0];
    temp.style.visibility = "visible";
}

//Creates the list of songs with buttons 
function CreateForm(jukebox) {
	for (var i = 0; i < jukebox.songs.length; i++) {
	  form0 = document.forms[0]
        .appendChild(document.createElement("input"));
      form0.className = "select-btn";
      form0.type = "button";
      form0.value = jukebox.songs[i].name;
      // console.log(jukebox.songs[i].name)
	}
}
function MakeSongList(songs) {
	songlist = []
	for (var i = 0; i < songs.length; i++) {
		nextSong = new Song(songs[i]);
		songlist.push(nextSong);
		}
	return songlist;
}

function LoadJukeBox(songlist, jukebox) {
    jukebox.addSongs(songlist);
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
	this.listsongs = function() {
		for (var i = 0; i < this.songs.length; i++) {
			console.log(this.songs[i].name);
		}
	}
	this.chooseSong = function(song) {

	}
}

function Song(name) {
   this.artist = "unknown";
   this.name = name;
   this.type = "good";
   this.play = function playSong() {
   	  var newSong = document.getElementsByClassName("Song-mp3")[0];
      newSong.src="data/"+this.name+".mp3";
      newSong.play();
   }  
   this.stop = function stopSong() {
   }
}

// var song1 = new Song
