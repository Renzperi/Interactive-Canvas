window.onload = function(){
// for canvas
	const canvasContainer = document.querySelector(".canvasContainer");

	const canvas = document.querySelector("#gameCanvas");
	const context = canvas.getContext("2d");
	canvas.width = canvasContainer.offsetWidth; 
	canvas.height = canvasContainer.offsetHeight;

	//for canvas grid lines
	
	//keyboard Event Listeners
	let keyboard = {}; //takes user keyboard input;

	window.addEventListener("keydown", (event) => {
		keyboard[event.key] = true;
	})
	window.addEventListener("keyup", (event) => {
		delete keyboard[event.key];
	})

	let bullets = [];
		canvasContainer.addEventListener("click", (event) => {
		bullets.push(new Bullet(player1.x, player1.y, 5, 5, event.offsetX, event.offsetY));
	})

	// player character
	function Player(x, y, rectWidth, rectHeight){
		this.x = x;
		this.y = y;
		this.rectWidth = rectWidth;
		this.rectHeight = rectHeight;
		this.xVelocity = 5;
		this.yVelocity = 5;
		this.plyrCenterX = this.rectWidth / 2;
		this.plyrCenterY = this.rectHeight / 2;

		this.draw = function(){
			context.fillStyle = "green";
			context.fillRect(this.x, this.y, this.rectWidth, this.rectHeight);
		}

		this.update = function(){
			if(keyboard['w']){
				if(this.y < 0){
					this.y = 0;
				}else{
					this.y -= this.yVelocity;
				}
			}else if(keyboard['s']){
				if(this.y + this.rectHeight > canvas.height){
					this.y = canvas.height - this.rectHeight;
				}else{
					this.y += this.yVelocity;
				}
			}

			if(keyboard['a']){
				if(this.x < 0){
					this.x = 0;
				}else{
					this.x -= this.xVelocity;
				}
			}else if(keyboard['d']){
				if(this.x + this.rectWidth > canvas.width){
					this.x = canvas.width - this.rectWidth;
				}else{
					this.x += this.xVelocity;
				}
			}

			this.draw();
		}
	}

	function Bullet(x, y, rectWidth, rectHeight, xTrajectory, yTrajectory){
		this.x = x;
		this.y = y;
		this.rectWidth = rectWidth;
		this.rectHeight = rectHeight;
		this.xVelocity = 5;
		this.yVelocity = 5;
		this.xTrajectory = xTrajectory;
		this.yTrajectory = yTrajectory;

		this.drawBullet = function(){
			context.fillStyle = "green";
			context.fillRect(this.x, this.y, this.rectWidth, this.rectHeight);
		}

		this.shoot = function(){
			// if(this.x < canvas.width){
			// 	if(this.xTrajectory < this.x){
			// 		this.x -= this.xVelocity;
			// 		if(this.x == this.xTrajectory){
			// 			bullets.shift();
			// 		}
			// 	}else if(this.xTrajectory > this.x){
			// 		this.x += this.xVelocity;
			// 		if(this.x == this.xTrajectory){
			// 			bullets.shift();
			// 			console.log("this worked")
			// 		}
			// 	}
			//}

			if(this.x + this.rectWidth < canvas.width){
				this.x += this.xVelocity;
				if(this.x + this.rectWidth == canvas.width){
					bullets.shift();
					console.log("this worked");
				}
			}

			this.drawBullet();
		}
	}
	
	let x = canvas.width / 2;
	let y = canvas.height / 2;
	let rectWidth = 20;
	let rectHeight = 20;
	const player1 = new Player(x, y, rectWidth, rectHeight);

	function animate(){
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);
    
		player1.update();

		for(let i = 0; i < bullets.length; i++){
			bullets[i].shoot();
		}
	}
	animate();
// end of canvas
}