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
	canvas.width = 720;
	canvas.height = 720;

	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(720, 720);
	context.stroke();

	console.log(canvas.width);
	console.log(canvas.height);
	// end of canvas
}