var seconds = 5; // seconds to check the current song
var time = seconds*1000; // dont edit this.
var message = 'Now Playing'; // default 'Now Playing:'
$('.nowplaying').html(message+' : <b><span id="np"></span></b>');
$('#np').load('song.php');
setInterval(function(){
  $('#np').load('song.php');
  
},time);
