function spawnImage(){
	var img = document.createElement('img');
	img.src = "http://png.clipart.me/graphics/thumbs/958/stinky-pile-of-poop-with-two-flies-vector-illustration_95866750.jpg";
	img.id = "image";
	
	document.getElementById('image_div').appendChild(img);
	updateTimer();
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
		var image_div = document.getElementById('image');
		image.parentNode.removeChild(image);
	}
}
