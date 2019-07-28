document.querySelector("#answer-a").addEventListener("click", addLaptop);
document.querySelector("#answer-b").addEventListener("click", addDesktop);
document.querySelector("#answer-c").addEventListener("click", addPhone);
document.querySelector("#answer-d").addEventListener("click", addTablet);

var choice = {};

function addLaptop(){
  choice["device"] = "laptop";
  console.log(choice);
}

function addDekstop(){
  choice("device")= "Desktop";
  console.log(choice);
}

function addPhone(){
  choice("device")="Phone";
  console.log(choice);
}

function addTablet(){
  choice("device")="Tablet";
  console.log(choice);
}
