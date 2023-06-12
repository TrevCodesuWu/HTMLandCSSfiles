const button1 = document.querySelector('.button1'); 
let wanto = document.querySelector('.wanto');
let summ = document.querySelector('.summ'); 

let cards = document.querySelector('.cards'); 

button1.addEventListener('click', startGame); 
let firstcard ;
let secondCard ;
let sum = 0;
let displayC = []; 
let sumMessage = "";
let hasBlackJack ;
let isAlive ;  

function getrandomNumber(){
  let random = Math.floor(Math.random() * 13) + 1; 
  if (random===1) {
    random=11; 
    return random ; 
  } else if(random===11){
      random=10; 
    return random ; 
  }
  else if (random===12) {
    random=10; 
    return random ;
  } else if (random===13){
    random=10; 
    return random ;
  }else {
    return random; 
  }
}

function startGame() {
 firstcard = getrandomNumber(); 
 secondCard = getrandomNumber(); 
 sum = firstcard + secondCard ; 
 displayC = [ firstcard , secondCard ] ;

summ.innerHTML = "Sum : ";
cards.innerHTML = "Cards : ";  

 if (sum < 21 ) 
 {
    isAlive = true; 
    hasBlackJack = false; 
    sumMessage = "Do you want to draw a another card?"; 
    wanto.innerHTML=sumMessage; 

    for (let i = 0;i < displayC.length;i++){
      cards.innerHTML = cards.innerHTML +displayC[i] +" | " ; 
    }
    summ.innerHTML = summ.innerHTML + sum ;
}

  else if (sum > 21) {

   isAlive = false; 
   hasBlackJack = false; 
   sumMessage = " you have lost";  
   wanto.innerHTML= sumMessage; 
    for (let i = 0;i < displayC.length;i++){
      cards.innerHTML = cards.innerHTML +displayC[i] +" | " ; 
    }

   summ.innerHTML = summ.innerHTML + sum ; 
                     }
  else {

   hasBlackJack = true ;
   isAlive = false ;
   sumMessage = "BLACKJACK!"; 
   wanto.innerHTML=sumMessage;
    for (let i = 0;i < displayC.length;i++){
      cards.innerHTML = cards.innerHTML +displayC[i] +" | " ; 
    }
   summ.innerHTML =summ.innerHTML + sum; 
       }

 }

const button2 = document.querySelector('.button2'); 
button2.addEventListener('click', newCard); 

function newCard() 
{
      if (hasBlackJack === false && isAlive === true) 
      { 
        let thirdCard = getrandomNumber();  
          cards.innerHTML = "Cards : "; 
          displayC.push(thirdCard); 

        for (let k = 0; k < displayC.length; k++){
          cards.innerHTML = cards.innerHTML + displayC[k] +" | " ; 
                                               }
          summ.innerHTML = "Sum : " + (sum + thirdCard); 
      }
} 
  

