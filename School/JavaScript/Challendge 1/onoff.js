var onoff = document.getElementById("onoff");
var body = document.getElementById("body")
var button1 = document.getElementById("buttoton1")
var button2 = document.getElementById("buttoton2")
var button3 = document.getElementById("buttoton3")
var button4 = document.getElementById("buttoton4")
var img = document.getElementById("ryan")
onoff.addEventListener("click", function handleClick() {
  var initialText = "Off";
  if (onoff.textContent.toLowerCase().includes(initialText.toLowerCase())) {onoff.textContent = "On"; body.style.backgroundColor = "white"; button1.removeAttribute("hidden");button3.removeAttribute("hidden"); button4.removeAttribute("hidden");img.removeAttribute("hidden");}
  else {onoff.textContent = initialText; body.style.backgroundColor = "black"; button1.setAttribute("hidden", 'hidden'); button2.setAttribute("hidden", 'hidden'); button3.setAttribute("hidden", 'hidden'); button4.setAttribute("hidden", "hidden"); img.setAttribute("hidden", 'hidden'); }
});
