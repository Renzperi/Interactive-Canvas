window.onload = function(){
	// // dropdown menu
	// const dropDownMenuContainer = document.querySelector(".dropdownMenu");
	// const dropdownBtn = document.querySelector(".dropdownMenuNav button");
	// dropDownMenuContainer.innerHTML = document.querySelector(".MenuNav").innerHTML; //dynamically enters content of dropdown menu
	
	// dropdownBtn.addEventListener("click", e => {
	// 	if(dropDownMenuContainer.style.visibility == "hidden"){
	// 		dropDownMenuContainer.style.visibility = "visible";
	// 	}else{
	// 		dropDownMenuContainer.style.visibility = "hidden";
	// 	}
	// })
	// // end of dropdown menu

	// for canvas
	const canvasContainer = document.querySelector(".canvasContainer");

	const canvas = document.querySelector("#gameCanvas");
	const context = canvas.getContext("2d");
	canvas.width = canvasContainer.offsetWidth; 
	canvas.height = canvasContainer.offsetHeight;

	// player character
	function Player(x, y){
		this.x = x;
		this.y = y;
		this.xVelocity = 1;

		this.draw = function(){
			context.fillStyle = "green";
			context.fillRect(this.x, this.y, 20, 20);
		}

		this.update = function(){
			if(this.x > canvas.width || this.x < 0){
				this.xVelocity = -this.xVelocity;
			}

			this.x += this.xVelocity;

			this.draw();
		}
	}
	
	let x = 10;
	let y = canvas.height / 2;
	const player1 = new Player(x, y);

	function animate(){
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);

		player1.update();
		console.log("hey");
	}

	animate();

	// end of canvas
}