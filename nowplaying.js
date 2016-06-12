/*** 
   COPYRIGHT SKYLETER LTD.
   MADE BY SKYLETER 
   Minify was failed ;_;
***/
function nowplaying(url,port,id,sid = 1,custom,customtext,type,time) {
	this.url = url;
	this.port = port;
	this.id = id;
	this.sid = sid;
	this.custom = custom;
	this.time = time*1000;
	this.customtext = customtext;
	this.type = type;
	setInterval(function(){
$.getJSON('http://anyorigin.com/get?url=http%3A//'+url+'%3A'+port+'/currentsong%3Fsid%3D'+sid+'&callback=?', function(data){
	if(custom === 1) { $('#'+id).html(customtext + data.contents); } 
					else { 
					var typetext;
					if(type==0) {typetext = 'Now playing:<br>';} else {typetext = 'You are listening to:<br>';}
					$('#'+id).html(typetext + data.contents);
					}
				});
				
	},time);
	
}
