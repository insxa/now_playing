// include: <script src="nowplaying.js"></script> - Please include jquery's library first.

var seconds = 5; // seconds to check the current song -- interval
var time = seconds*1000; // dont edit this.
var message = 'Now Playing'; // default 'Now Playing', this will show as 'Now Playing: SONG'
var nowp = '.nowplaying' // class (.) or id (#)  of the dom element to place the message variable and the current song. For example <div id="np"></div> <--- id: np
$(nowp).html(message+': <b><span id="np">Loading...</span></b>');
$('#np').load('song.php');
setInterval(function(){
  $('#np').load('song.php');
  
},time);
