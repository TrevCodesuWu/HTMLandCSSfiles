const peopleNum = document.querySelector('.peopleNum') ; 
const button1 = document.querySelector('.button1'); 
const button2 = document.querySelector('.button2') ;
const label1 = document.querySelector('.label1'); 

let total = 0;
button1.addEventListener('click', function(){

let num = window.prompt('How many people entered?') ;
num = parseInt(num);

total = (total + num); 

peopleNum.innerHTML= total;
}); 

button2.addEventListener('click', function(){


 const finPassengers = label1.innerHTML = total;

}); 