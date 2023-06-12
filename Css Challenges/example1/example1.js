const document1 = document.querySelector(".document1"); 

document1.innerHTML += "<button class='button1'>click me  </button>" ; 
const button1 = document.querySelector(".button1"); 
button1.addEventListener('click' ,displayDogshit); 
const textbox =document.querySelector(".textbox"); 
let everything = []; 
let doc =document.querySelector(".doc"); 

function displayDogshit() 
{  
	everything.push(textbox.value);  
	textbox.value=" ";
	Run(); 
   
}

function Run() {
	let value =" ";
	for(let j = 0 ; j<everything.length; j++){
		value += "<li>" +everything[j] + "</li>";  
   
	 console.log(value);
	}
	 doc.innerHTML = value; 
	 console.log("next"); 
	 console.log(doc.innerHTML);
}