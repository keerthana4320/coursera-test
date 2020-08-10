(function(window){
	var word="Goodbye";
	var byespeaker=function(name){
		console.log(word+" "+name);
	}
	window.byespeaker=byespeaker;
})(window);