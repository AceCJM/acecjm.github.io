function leave1(){
   let element = document.getElementById("buttoton1");
   let element2 = document.getElementById("buttoton2")
   let hidden = element.getAttribute("hidden");
   if (hidden) {element.removeAttribute("hidden"); element2.setAttribute("hidden", "hidden")} 
   else {element.setAttribute("hidden", "hidden"); element2.removeAttribute("hidden")}}