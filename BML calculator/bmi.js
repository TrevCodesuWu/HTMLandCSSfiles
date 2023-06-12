const inputw = document.querySelector(".inputweight"); 
var inputh = document.querySelector(".inputheight") ;
const btns =  document.querySelector(".submitbutton"); 
const dlabel = document.querySelector(".displaylabel"); 
const resetbutton = document.querySelector(".Resetbtn"); 

var intweight;  
var intheight;
var ans ;
btns.addEventListener('click', submit); 

function submit() { 
    intweight = parseInt(inputw.value); 
    intheight = parseInt(inputh.value); 
    ans =  intweight / (intheight * intheight); 
	dlabel.innerText ="BMI :"+ans; 

    dlabel.style="background:yellow;"; 
    if (dlabel.innerHTML =="NaN") {
       console.log("no text is entered in the textbox"); 
       alert("enter some values first !!"); 
    }
     
}
resetbutton.addEventListener('click',reset); 
function reset() {
 inputw.value = ""; 
 inputh.value = "";
 dlabel.innerHTML = ""; 
}