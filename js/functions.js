function spawnImage(){
	
}

var counter = 20;
function updateTimer(){
	counter--;
  document.getElementById("timer").innerHTML = counter;
	setTimeout(updateTimer, 1000);
}