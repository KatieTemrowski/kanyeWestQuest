function init(){

	$("#mailIcon").hover(function(){
		$(this).attr("src", "data/openemailbox.png");
	}, function() {
		$(this).attr("src", "data/closedemailbox.png");
	})

	$("#startGame").click(function(){
		$("#startGame").hide();
		$.getScript("Release/UnityLoader.js", function(){

		});
	})

	var kanye = $("#walkingKanye");
	var position = -10;
	var movement = 1;
	var kanyeNo = 1;
	var id = setInterval(moveKanyeLeft, 100);
	function moveKanyeLeft(){
		if (position > 100 || position < -10) {
		// clearInterval(id);
		movement *= -1;
		kanyeNo += 1;
		if(kanyeNo >= 7){
			kanyeNo = 1;
		}
		kanye.attr("src", "data/k" + kanyeNo + ".gif");
	} 

	kanye.css("left", position + "%")
	position += movement;
}
}

window.addEventListener('load',init);
