(function(window){
	var word="hello";
	var hellospeaker=function(name){
		console.log(word+" "+name);
	}
	window.hellospeaker=hellospeaker;
})(window);