window.onload = function (){
	$("#content").fadeIn();


};

function launchTest() {
	$("#content").fadeOut();
	$("#testContent").fadeIn();
}

function testDone() {
	var sentenceTest = "Ce test doit permettre d'agir avant l'accident en gardant l'esprit de la fête afin que le message soit positif";
	var response = $( "#responseInput" ).val();
	console.log(response, sentenceTest);
	if (sentenceTest == response){
		$("#good").fadeIn();
		$("#testContent").fadeOut();
	}
	else{
		$("#bad").fadeIn();
		$("#testContent").fadeOut();

	}
}