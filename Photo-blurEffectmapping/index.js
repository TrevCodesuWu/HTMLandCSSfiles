const outter = document.querySelector('.outter') ; 
const square = document.querySelector('.square') ; 

let count =  0 ; // let cannot be remade into another variable with the same name unlike var 

 let int = setInterval(loading,30); //Calls the method/ function named 'loading' every 30 milliseconds 

function loading() {
  count++;  // Adds  one to the variable count 

  if (count > 99) {
    clearInterval(int);  // Ends the interval and stops counting 
  }
square.innerHTML = `${count}%`; // Changed the inside text of the square 
square.style.opacity =  scale(count,0,100,1,0.3); // mapping the 0 to hundred to opacity from 0 to 1
//outter.style.opacity = scale(count,0,100,1,0.2); // scales the count to the background 
  outter.style.filter = `blur(${scale(count,0,100,13,0)}px)`; 
}

  // You need the below code to use the mapping . from stack overflow . 
const scale = (num, in_min, in_max, out_min, out_max) => 
{ return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min 
} 