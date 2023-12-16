window.onload = function(){
	// dropdown menu
	const dropDownMenuContainer = document.querySelector(".dropdownMenu");
	const dropdownBtn = document.querySelector(".dropdownMenuNav button");
	dropDownMenuContainer.innerHTML = document.querySelector(".MenuNav").innerHTML; //dynamically enters content of dropdown menu
	
	dropdownBtn.addEventListener("click", e => {
		if(dropDownMenuContainer.style.display == "none"){
			dropDownMenuContainer.style.display = "block";
		}else{
			dropDownMenuContainer.style.display = "none";
		}
	})
	// end of dropdown menu

	// for canvas
	const canvas = document.querySelector("#gameCanvas");
	const context = canvas.getContext("2d");
	canvas.width = 1000;
	canvas.height = 1000;


	// triangle
	context.lineWidth = 10;
	context.strokeStyle = "black"; //for coloring stroke() or lineWidth
	context.fillStyle = "green"; //for coloring fill();

	context.beginPath();
	context.moveTo(0, 50);
	context.lineTo(500, 500);
	context.lineTo(1000, 0);
	context.lineTo(0 , 50);
	context.stroke(); //for drawing the line
	context.fill(); //for filling the shape with colors

	console.log(canvas.width);
	console.log(canvas.height);

	//rectangle
	context.lineWidth = 5; //for modifying border thickness
	context.strokeStyle = "red"; //for modifying border color of rectangle
	context.fillStyle = "blue"; //for modifying fill color of rect

	context.strokeRect(0, 0, 100, 100); //for drawing rectangle (x, y, width, height)
	context.fillRect(0, 0, 100, 100); //for drawing filled rectangle (x, y, width, height)
	

	//circle
	context.fillStyle = "yellow"; //modify fill color of circle
	context.strokeStyle = "black"; //modify stroke color of circle
	context.lineWidth = 5; //modify border thickness of circle

	context.beginPath();
	context.arc(250, 250, 100, 0, 2 * Math.PI); //for drawing circle (x, y, radius, startingAngle, endingAngle, counterclockwise - true or false))
	context.stroke();
	context.fill();

	//draw text
	context.font = "50px MV Boli"; //modify font size and font style "fontSize fontStyle"
	context.fillStyle = "black"; //modify font color
	context.textAlign = "center"; //center a text ;note: fillText() must be at the center of the canvas
	context.fillText("LMAO", 600, 900); //draw text("string", x, y)

	// end of canvas
}