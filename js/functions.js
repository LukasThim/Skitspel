function spawnImage(){

}

var time = 3;
var counter = time;

function updateTimer(){
	document.getElementById("timer").innerHTML = counter;
	counter--;
  document.getElementById("timer").innerHTML = counter;
	setTimeout(updateTimer, 1000);
}

});
	if(counter >= 0){
		setTimeout(updateTimer, 1000);
	}
	else{
		document.getElementById("timer").innerHTML = "";
		counter = time;
		document.getElementById('button_div').style.display = 'block';
	}
}

function(display(function){
	(hej).onClick(function){
		(hej).removeClass(.displaynone);
	}
