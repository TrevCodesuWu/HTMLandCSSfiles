const button1 = document.querySelector(".button1"); 
const div1 = document.querySelector(".div1"); 
let input1 = document.querySelector(".input1"); 
let unorderedList = document.querySelector(".unorderedList"); 

let inputArray = []; 
let answer ; 
button1.addEventListener('click', add);

function add() 
		{
		answer = input1.value; 
		inputArray.push(answer);
		console.log(inputArray);
		input1.value = " ";  
		answer = " " ; 

		displayArray(); 
		}

function displayArray() 
{ let values = " "; 
	for( let i = 0 ; i<inputArray.length;i++) {
		values = "<li>" + inputArray[i] + "</li>" ;  
	}

   unorderedList.innerHTML += values ;
}