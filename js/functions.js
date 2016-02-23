function spawnImage(){
	
}

var time = 3;
var counter = time;

function updateTimer(){
	document.getElementById("timer").innerHTML = counter;
	counter--;
	if(counter >= 0){
		setTimeout(updateTimer, 1000);
	}
	else{
		document.getElementById("timer").innerHTML = "";
		counter = time;
		document.getElementById('button_div').style.display = 'block';
	}
}