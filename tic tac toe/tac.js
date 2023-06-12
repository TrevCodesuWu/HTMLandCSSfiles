const div1 = document.querySelector(".div1"); 
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
const div8 = document.querySelector(".div8");
const div9 = document.querySelector(".div9");
const button1 = document.querySelector(".button1"); 
let count = Math.floor(Math.random()*2); 
let variableone = 0; 
console.log(count); 

div1.addEventListener('click',topleft); 
function topleft() {
	if (count===1){
        div1.style = "background:blue;"; 
        variableone++; 
        console.log(variableone); 
	} else {
		div1.style= "background:url('imageone.jpg');";
	} 
}
div2.addEventListener('click',topmiddle); 
function topmiddle() {
	div2.style= "background:black;"; 
}
div3.addEventListener('click',topright); 
function topright() {
	div3.style= "background:black;"; 
}
div4.addEventListener('click',middleleft); 
function middleleft() {
	div4.style= "background:black;"; 
}
div5.addEventListener('click',middlemiddle); 
function middlemiddle() {
	div5.style= "background:black;"; 
}
div6.addEventListener('click',middleright); 
function middleright() {
	div6.style= "background:black;"; 
}
div7.addEventListener('click',endleft); 
function endleft() {
	div7.style= "background:black;"; 
}
div8.addEventListener('click',endmiddle); 
function endmiddle() {
	div8.style= "background:black;"; 
}
div9.addEventListener('click',endright); 
function endright() {
	div9.style= "background:black;"; 

}

button1.addEventListener('click',resetbutton); 
function resetbutton() { 
 div1.style="background:white;"; 
  div2.style="background:white;"; 
   div3.style="background:white;"; 
    div4.style="background:white;"; 
     div5.style="background:white;"; 
      div6.style="background:white;"; 
       div7.style="background:white;"; 
        div8.style="background:white;"; 
         div9.style="background:white;"; 
}

console.log(variableone) ; 