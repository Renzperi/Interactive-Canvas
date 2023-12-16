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
	function Player(x, y, rectWidth, rectHeight){
		this.x = x;
		this.y = y;
		this.rectWidth = rectWidth;
		this.rectHeight = rectHeight;
		this.xVelocity = 2;
		this.yVelocity = 2;

		this.draw = function(){
			context.fillStyle = "green";
			context.fillRect(this.x, this.y, this.rectWidth, this.rectHeight);
		}

		this.update = function(){
			if(this.x + this.rectWidth > canvas.width || this.x < 0){
				this.xVelocity = -this.xVelocity;
			}

			if(this.y + this.rectHeight >canvas.height || this.y < 0){
				this.yVelocity = -this.yVelocity;
			}

			this.x += this.xVelocity;
			this.y += this.yVelocity;

			this.draw();
		}
	}
	
	let x = 0;
	let y = 0;
	let rectWidth = 20;
	let rectHeight = 20;
	const player1 = new Player(x, y, rectWidth, rectHeight);

	function animate(){
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);

		player1.update();
	}
	animate();
	// end of canvas
}