function blinking() {
  	var x = document.getElementById("ul");
    if (x.className === "li"){
       	x.className = "list";
    }
    else {
       	x.className = "li";
    }
}
setInterval(blinking, 400);