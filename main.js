//Program to create a jukebox to display and playback, stop different
//songs.
// npm install musicmetadata;

// window.onload = StartJukeBox;
// var currSong = document.getElementsByClassName("Song-mp3")[0];
// console.log("first song");
// console.log(currSong.src);
// currSong.src = "data/Landslide.mp3";
window.onload=CreateJukeBox();
//Songs are loaded into the JukeBox through a user text file which
//has a list of all the songs. User can add names to the list if the 
//.mp3 file is in the data directory. Jukebox assumes all audio files 
//are in the data directory.
function CreateJukeBox(event) {
	start = document.getElementsByClassName("start-button")[0];
	var songs1 = [];
	start.addEventListener("click", function(songs1) {
		var songs = [];
		var inputBtn = document.getElementsByClassName("input-div")[0];
		start.style.visibility = "hidden";
		//Makes visible the "choose file" button. Not easy to re-style this button
		inputBtn.style.visibility = "visible";
        //Inputs the names of the songs as listed in the file user chooses. 
		InputSongs(inputBtn,songs,function(songs) {
			//Reads the list of songs into the songs1 array.
			var songs1 = songs.split(".mp3\n");
			//Most of the program runs in this function
		    RunJukeBox(songs1);
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
function RunJukeBox(songs) {
	var songList = [];
	//For future make a function in which the user can input 
	//different genres of songs
	var myJukeBox = new Jukebox("Margaret's Tunes");
	songlist = MakeSongList(songs);
	myJukeBox.addSongs(songlist);
	myJukeBox.displayJukebox();
	myJukeBox.selectSong();
    myJukeBox.controlSong();
    myJukeBox.randomSelect();
    myJukeBox.listsongs(); //not needed for the Jukebox
}

function MakeSongList(songs) {
	songlist = []
	for (var i = 0; i < songs.length; i++) {
		nextSong = new Song(songs[i]);
		songlist.push(nextSong);
		}
    songlist.pop(); //added a blank song at end.
	return songlist;
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
	this.selectSong = function() {
		var currSong = document.getElementsByClassName("Song-mp3")[0];
        var songBtns = document.getElementsByClassName("form-list")[0].elements;
        var songmsg = document.getElementsByClassName("directive")[0];
        for (var i = 0; i < this.songs.length; i++) {
           songBtns[i].addEventListener("click", function(event){ 
           	  //event.preventDefault;
           	  currSong.src="data/"+this.value+".mp3";
           	  songmsg.innerHTML = this.value+".mp3";
           });
        }
	}
	this.randomSelect = function() {
		var randBtn = document.getElementsByClassName("rand-btn")[0];
		randBtn.num = this.songs.length;
		randBtn.songs = this.songs;
		randBtn.addEventListener("click", function(event){ 
	         //this refers to the eventListener
	          var currSong = document.getElementsByClassName("Song-mp3")[0];
			  var songmsg = document.getElementsByClassName("directive")[0];
			  console.log("in random "+this.num);
           	  var rand = this.songs[Math.floor(Math.random()*this.num)];
           	  currSong.src="data/"+rand.name+".mp3";
           	  songmsg.innerHTML = rand.name+".mp3";
           });
	}

	this.controlSong = function() {
	   var currSong = document.getElementsByClassName("Song-mp3")[0];
	   var playBtn = document.getElementsByClassName("play-btn")[0];
	   var pauseBtn = document.getElementsByClassName("pause-btn")[0];
	   playBtn.addEventListener("click",function() {
		 currSong.play() });
	   pauseBtn.addEventListener("click",function() {
		 currSong.pause() });
    }
//Revision follows this line to put the jukebox methods in the jukebox
//object
    this.displayJukebox = function() {
       this.changeHeading();
       this.displayJukeboxList();
    }

    this.changeHeading = function() {
       var newGreeting = "Welcome to your Juke Box";
       var headline = document.getElementsByClassName('headline')[0];
       headline.innerHTML = newGreeting;
       var temp = document.getElementsByClassName('input-div')[0];
       temp.style.visibility = "hidden";
       temp = document.getElementsByClassName('directive')[0];
       temp.innerHTML = "Choose a song";
    }

    //Makes the jukebox-div visible
    this.displayJukeboxList = function() {
	   this.createForm();
       var temp = document.getElementsByClassName('jukebox-display')[0];
       temp.style.visibility = "visible";
    }

    //Creates the list of songs with buttons 
    this.createForm = function() {
	  for (var i = 0; i < this.songs.length; i++) {
	    form0 = document.forms[0]
          .appendChild(document.createElement("input"));
        form0.className = "select-btn";
        form0.type = "button";
        form0.value = this.songs[i].name;
	  }
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

