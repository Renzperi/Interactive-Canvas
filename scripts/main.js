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
	// end of canvas
}