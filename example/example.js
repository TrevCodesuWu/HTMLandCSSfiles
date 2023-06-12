/*
//Creating two variables and seeing which one has the fastest race time or if it equal . 
let player1Time = 22 ;
let player2Time = 22 ;
let equalTime = "Times are equal "; 

function fastestTime(){
   if (player1Time > player2Time) {
      return player2Time ;
   } else if (player1Time < player2Time )
   {
      return player1Time ;

   } else {
      return equalTime ;  // This will return the answer in the method 
   }
}
 let fastestTimeOfAll = fastestTime(); // Setting the answer of the function to another variable 
 console.log(fastestTimeOfAll); 

 function totalRaceTime() { // Calculating the total time using a method 

   return (player1Time + player2Time );

 }
let totalRacingTime = totalRaceTime(); 
console.log(totalRacingTime); 
 
// let number1  = window.prompt("enter a number"); 
// let number2 = window.prompt("enter another number"); 
let bothSame = "both of the numbers have the same value "; 

function biggerNumber(number1 , number2) {
 if (number1 > number2) {
   return number1 ;
 } else if (number2 > number1) {
   return number2 ;
 } else {
   return bothSame ;
 }
}
console.log(biggerNumber(player1Time , player2Time)); 

let hasCompletedCourse = true ; 
let hasGottenCertificate = true; 

if (hasCompletedCourse === true && hasGottenCertificate   true) {
   function generateCertificate(){
  console.log("Generate certificate ..."); 
 }
 generateCertificate() ;
}
 

 // How to create an array of objects : 
      let bird = [
                  {
                title:"Jurassic World",
                length:150,
                genre:"Adventure",
                Age:14
                 },
                   {
                title:"PacMan",
                length:120,
                genre:"fun",
                Age:10
                 },
                  {
                title:"Laugh",
                length:110,
                genre:"comedy",
                Age:16
                  }
                 ]
   
 
 console.log(bird[2].genre);  
 //How to remove items in an array from the start and the beginning : 

let largeCountries = [ "Tuvalu","India","USA","Indonesia","Monaco"] ;
largeCountries.shift(); 
largeCountries.unshift("China"); 
largeCountries.pop(); 
largeCountries.push("Pakistan"); 

for (let i = 0 ;i<largeCountries.length;i++) {
    console.log("- "+ largeCountries[i]); 
}  

 let dayOfMonth = 11 ;
 let weekday = "Friday"; 

 if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("you see a spooky face here "); 
 } else {
    console.log("you see nothing here in place of it ") ; 
 } 


 let hands = [ "rock", "paper", "scissors"] ; 
 let number1 ; 
 function decision() {

    number1 = Math.floor(Math.random() * 3); 
    return hands[number1]; 
 }
 console.log(decision());  */ 

 let div1 = document.querySelector(".div1"); 
 let div2 = document.querySelector(".div2"); 
 let div3 = document.querySelector(".div3"); 
 let button1 = document.querySelector(".button1"); 

 let fruitsArray = ["banana","banana","fruit","banana","orange","banana","fruit","banana","orange","banana"]; 
 

 for (let i = 0 ;i <fruitsArray.length;i++){
     div3.innerHTML = div3.innerHTML + " "+fruitsArray[i]; 
 }

 button1.addEventListener('click', sortingItems); 
  function sortingItems(){

            for (let j = 0 ;j <fruitsArray.length;j++)
            {
                if (fruitsArray[j]==="orange") {
                    div2.innerHTML = div2.innerHTML + " "+fruitsArray[j] ;
                } 

                if (fruitsArray[j]==="banana") {
                    div1.innerHTML = div1.innerHTML + " "+fruitsArray[j] ;
                } 

             }
 }
