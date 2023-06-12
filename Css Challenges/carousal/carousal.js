const frame = document.querySelector('.frame'); 
const one = document.querySelector('.one'); 
const next = document.querySelector(".next"); 
const previous = document.querySelector('.previous'); 
const counterbutton = document.querySelector('.counterbutton'); 
const counterlabel = document.querySelector('.counterlabel'); 

counterbutton.addEventListener('click', counter); 
function counter() {
	counterlabel.innerHTML = " changed"; 
}