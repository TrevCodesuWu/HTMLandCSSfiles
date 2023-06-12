let paragraph = document.querySelector(".paragraph");
let button1 = document.querySelector(".button1"); 

/*let name1 ; 
let newName = helloUser("Kylan"); 
console.log(newName); 
paragraph.innerHTML = newName 


function helloUser(name) {
name1 = " Hello to " + name ; 
return name1; 
}  */ 

let thingsArray = ["table" , "chair" ,"cupboard"]; 
let wordsArray = []; 
wordsArray.push("displayTime"); 
wordsArray.push("MiningTime"); 
display(wordsArray); 
display(thingsArray); 



function display(newArray) {
	for (let i = 0; i<newArray.length; i++){
		paragraph.innerHTML += newArray[i] + " " ;  
	}

}
button1.addEventListener('click' , clicked) ; 
function clicked() {
	paragraph.innerHTML  = " " ;
}
//What are parameters and arguments ? 
// Parameters are when you write the function , when creating the function
function add(num1 , num2) {
	return num1 + num2 ; 
}

//Arguments are when you call a function and enter the values inside  . 
console.log(add(2, 4)); 
console.log(add(2 , 111)); 

//Calling a array in a function 
let firstArray = ["Trevlin" ,"Kylan" , "Shaolin"]; 

function display(arrayTime) {
	return arrayTime[2] ;
}

console.log(display(firstArray)); 