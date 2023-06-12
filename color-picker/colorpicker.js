const section1 = document.querySelector(".section1") ;
const button1 = document.querySelector(".button1"); 
const headingcol = document.querySelector(".headingcol"); 
const div1 = document.querySelector(".div1"); 
const div2 = document.querySelector(".div2"); 
const  arraycolor = ["blue","red","green","orange","purple"]; 

let colorRandom ; 
button1.addEventListener('click',buttonclick);
function colorpicker() {
  colorRandom = Math.floor(Math.random() * 5 ); 
  console.log(colorRandom); 
  return colorRandom; 
}

function buttonclick() {
	let vari = arraycolor[colorpicker()];
 headingcol.innerHTML = "background color :"+vari;
 section1.style.background =   vari;
 button1.style.background = vari; 


} 