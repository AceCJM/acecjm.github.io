function leave2(){
    let element = document.getElementById("buttoton1");
    let element2 = document.getElementById("buttoton2")
    let hidden = element2.getAttribute("hidden");
    if (hidden) {element2.removeAttribute("hidden"); element.setAttribute("hidden", "hidden")} 
    else {element2.setAttribute("hidden", "hidden"); element.removeAttribute("hidden")}}