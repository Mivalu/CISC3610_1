window.onload = function() {
	var canvas = document.getElementById("drawingCanvas");
	var context = canvas.getContext("2d");
	
	//sky
	context.beginPath();
	context.rect(0,0,500,398);
	context.strokeStyle = "aqua";
	context.fillStyle = "aqua";
	context.fill();

	//ground
	context.beginPath();
	context.rect(0,400,500,410);
	context.strokeStyle = "brown";
	context.fillStyle = "brown";
	context.fill();

	//ground line
	context.beginPath();
	context.moveTo(10,400);
	context.lineTo(490,400);
	context.strokeStyle = "black";
	context.stroke();

	//cloud1
	var startX = 50;
	var startY = 100;

	//base
	context.moveTo(startX,startY);
	context.lineTo(startX+100,startY);
	context.stroke();

	//floof1
	context.beginPath();
	context.moveTo(startX+72,startY-18);
	var centerX = startX+80;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1.3 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof2
	context.beginPath();
	context.moveTo(startX+30,startY-15);
	var centerX = startX+50;
	var centerY = startY-15;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof3
	context.beginPath();
	context.moveTo(startX,startY);
	var centerX = startX+20;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 1.7 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//cloud2
	var startX = 300;
	var startY = 175;

	//base
	context.moveTo(startX,startY);
	context.lineTo(startX+100,startY);
	context.stroke();

	//floof1
	context.beginPath();
	context.moveTo(startX+72,startY-18);
	var centerX = startX+80;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1.3 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof2
	context.beginPath();
	context.moveTo(startX+30,startY-15);
	var centerX = startX+50;
	var centerY = startY-15;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof3
	context.beginPath();
	context.moveTo(startX,startY);
	var centerX = startX+20;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 1.7 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//cloud3
	var startX = 120;
	var startY = 125;

	//base
	context.moveTo(startX,startY);
	context.lineTo(startX+100,startY);
	context.stroke();

	//floof1
	context.beginPath();
	context.moveTo(startX+72,startY-18);
	var centerX = startX+80;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1.3 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof2
	context.beginPath();
	context.moveTo(startX+30,startY-15);
	var centerX = startX+50;
	var centerY = startY-15;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//floof3
	context.beginPath();
	context.moveTo(startX,startY);
	var centerX = startX+20;
	var centerY = startY;
	var radius = 20;
	var startingAngle = 1 * Math.PI;
	var endingAngle = 1.7 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.stroke();

	//sun 
	context.beginPath();
	context.moveTo(430,50);
	var centerX = 400;
	var centerY = 50;
	var radius = 30;
	var startingAngle = 0 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "yellow";
	context.stroke();

	//house
	context.beginPath();
	context.moveTo(25,400);
	context.lineTo(150,400);
	context.lineTo(150,250);
	context.lineTo(25,250);
	context.lineTo(25,400);
	context.fillStyle = "pink";
	context.fill();
	context.strokeStyle = "black";
	context.stroke();

	//roof
	context.beginPath();
	context.moveTo(25,250);
	context.lineTo(150,250);
	context.lineTo(75,200);
	context.lineTo(25,250);
	context.fillStyle = "red";
	context.fill();
	context.stroke();

	//door
	context.beginPath();
	context.moveTo(50,400);
	context.lineTo(90,400);
	context.lineTo(90,325);
	context.lineTo(50,325);
	context.lineTo(50,400);
	context.fillStyle = "green";
	context.fill();
	context.stroke();

	//doorknob
	context.beginPath();
	context.moveTo(60,360);
	var centerX = 60;
	var centerY = 365;
	var radius = 5;
	var startingAngle = 0 * Math.PI;
	var endingAngle = 2 * Math.PI;
	context.arc(centerX,centerY,radius,startingAngle,endingAngle);
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "yellow";
	context.stroke();

	//window
	context.beginPath();
	context.moveTo(140,275);
	context.lineTo(100,275);
	context.lineTo(100,315);
	context.lineTo(140,315);
	context.lineTo(140,275);
	context.fillStyle = "white";
	context.strokeStyle = "black";
	context.fill();
	context.stroke();

	//window pane lines
	context.beginPath();
	context.moveTo(120,315);
	context.lineTo(120,275);
	context.stroke();

	context.beginPath();
	context.moveTo(100,295);
	context.lineTo(140,295);
	context.stroke();


	//grass
	var startGrassx = 2;
	var startGrassy = 495;

	for (var l = 0; l < 10; l++){
		for (var i = 0; i < 197; i++) {
			if (i%2===0){
				startGrassx -= 1;
				context.beginPath();
				context.moveTo(startGrassx,startGrassy);
				context.lineTo(startGrassx+2,startGrassy-7);
				context.fill();
				context.strokeStyle = "green";
				context.stroke();
			}
			else if (i%5===0){
				context.beginPath();
				context.moveTo(startGrassx,startGrassy);
				context.lineTo(startGrassx-1,startGrassy-8);
				context.fill();
				context.stroke();

			}
			startGrassx += 3;
		};
		startGrassx = 3;
		startGrassy -= 9;
	};

	//text
	context.font = "20px Helvetica";
	context.fillText("I was not meant to be an artist.", 200, 425);

}