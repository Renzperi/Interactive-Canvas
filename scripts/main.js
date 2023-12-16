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

	console.log(canvasContainer.getAttribute("maxWidth"));
	console.log(canvasContainer.offsetWidth);
	console.log(canvasContainer.offsetHeight);


	// end of canvas
}