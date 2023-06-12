/*const count = document.querySelector('.count') ; 
const button1 = document.querySelector('.button1'); 
const button2 = document.querySelector('.button2') ; 
const formm = document.querySelector('.formm') ;
// taking it from the html document 

let counter = 0; // Making a variable named counter and setting it to zero 

button1.addEventListener('click' , function(){ // adding event which is activated when the user clicks the button
counter++; //Adds one to the counter variable 
count.innerHTML= counter; // changes the inside text of the count from the html document
});

button2.addEventListener('click' , function(){
formm.innerHTML=counter;
});  

const paragraph = document.querySelector('.paragraph') ;

let welcomeMessage = "Welcome mister " ; 
let name = window.prompt("what is your name?"); 
let bracket = " , who is " ;
let anotherbracket = " years old";
let age = window.prompt('what is your age?') ;
let greeting = welcomeMessage+name+bracket+age+anotherbracket;
paragraph.innerHTML=greeting; 
paragraph.innerHTML=paragraph.innerHTML + " *emoji*";  */ 

let span1 = 38  ;
let span2 = 4 ; 

document.querySelector('.span1').innerHTML = span1; 
document.querySelector('.span2').innerHTML = span2 ; 
                                                   //let span2 = document.querySelector('.span2'); 
                                                     // span2.innerHTML = 4; 
 const add = document.querySelector('.add') ;
 const subtract = document.querySelector('.subtract'); 
 const multiply = document.querySelector('.multiply') ; 
 const divide = document.querySelector('.divide') ;
 const reset =document.querySelector('.reset'); 
 let form = document.querySelector('.form'); 
 let count = 0; 

 add.addEventListener('click', function(){
    count++; 
    resetting(); 
   form.innerHTML= form.innerHTML + (span1 + span2);
 }); 
 subtract.addEventListener('click', function(){
    count++; 
    resetting(); 
   form.innerHTML= form.innerHTML + (span1 - span2);
 }); 
 divide.addEventListener('click', function(){
    count++; 
    resetting(); 
   form.innerHTML= form.innerHTML + (span1 / span2);
 }); 
 multiply.addEventListener('click', function(){
    count++; 
    resetting(); 
   form.innerHTML= form.innerHTML + (span1 * span2);

 }); 
/*
reset.addEventListener('click', function(){
 form.innerHTML = "Sum :"; 
}); */ 

function resetting(){
   if(count=>2){
    form.innerHTML = "Sum : "; 
   }

}