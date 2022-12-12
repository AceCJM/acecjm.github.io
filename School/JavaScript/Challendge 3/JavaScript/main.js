var onoff = document.getElementById("onoff");
var body = document.getElementById("body");
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
var img = document.getElementById("image1")
onoff.addEventListener("click", function handleClick() {
  var initialText = "Off";
  if (onoff.textContent.toLowerCase().includes(initialText.toLowerCase())) {onoff.textContent = "On"; body.style.backgroundColor = "white"; element1.removeAttribute("hidden"); element2.removeAttribute("hidden"); img.style.visibility= "visible";}
  else {onoff.textContent = initialText; body.style.backgroundColor = "black"; element1.setAttribute("hidden", 'hidden'); element2.setAttribute("hidden", 'hidden'); img.style.visibility= "hidden";}
});
