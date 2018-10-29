let changementCouleur12 = document.getElementById("12");
let changementCouleur13 = document.getElementById("13");
let changementCouleur14 = document.getElementById("14");
let changementCouleur22 = document.getElementById("22");
let changementCouleur25 = document.getElementById("25");
let changementCouleur33 = document.getElementById("33");
let changementCouleur42 = document.getElementById("42");
let changementCouleur43 = document.getElementById("43");

changementCouleur12.addEventListener("click",functionTest,false);
changementCouleur13.addEventListener("click",functionTest,false);
changementCouleur14.addEventListener("click",functionTest,false);
changementCouleur22.addEventListener("click",functionTest,false);
changementCouleur25.addEventListener("click",functionTest,false);
changementCouleur33.addEventListener("click",functionTest,false);
changementCouleur42.addEventListener("click",functionTest,false);
changementCouleur43.addEventListener("click",functionTest,false);


function functionTest(){
  if (this.classList.contains("bg-red")) {
    this.classList.add("bg-yellow")
    this.classList.remove("bg-red")
  } else if(this.classList.contains("bg-yellow")){
  this.classList.add("bg-blue")
  this.classList.remove("bg-yellow")
}  else if(this.classList.contains("bg-blue")){
this.classList.add("bg-white")
this.classList.remove("bg-blue")
}  else if(this.classList.contains("bg-white")){
this.classList.add("bg-purple")
  this.classList.remove("bg-white")
} else if(this.classList.contains("bg-purple")){
  this.classList.add("bg-red")
  this.classList.remove("bg-purple")
}
}
