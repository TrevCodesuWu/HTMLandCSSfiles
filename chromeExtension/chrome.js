 /*const player = "Per"; 
const opponent = "Nick"; 
const game = "AmazingFighter"; 
let points = 0; 
let hasWon = false ;

points += 100; 
hasWon = true; 

if (hasWon) {
	//console.log(player + " got " + points + " points and has won the "+ game + " game!"); 
	console.log(`${player} got ${points} points and has won the ${game} game!`); 
} else {
	//console.log("The winner is "+ opponent + " ! " + player + " lost the game"); 
	console.log(`The winner is ${opponent} ! ${player} lost the game `); 
}

let myCourses = ["Learn CSS animations", "UI Design Fundamentals","Intro to Clean Code"]  ;
let myGirlfriends = ["Dum kunt","Useless bastard","cuck boy"] ; 

function displaysArrays(arr1) {
	for (let i = 0 ; i < arr1.length ; i++) {
		 console.log(arr1[i]); 
	}
}

displaysArrays(myCourses);  


let foolArray  = ["Joshua" ,"Jeremiah" ,"Rakheel"]; 
foolArray = JSON.stringify(foolArray); 
localStorage.setItem("fool",foolArray);
let d = localStorage.getItem("fool"); 
console.log(d);  

foolArray = JSON.parse(foolArray); 
foolArray.push("Kylan"); 
foolArray.unshift("Trevlin"); 
localStorage.setItem("fool",JSON.stringify(foolArray)); 
let c = localStorage.getItem("fool"); 
console.log(c); 

localStorage.clear(); 
console.log(localStorage); 

const button1 = document.querySelector(".button1"); 
let data = [
				{
					player:"Jane",
					score:23
				},
				{
					player:"Joberg",
					score:34
				}
]

button1.addEventListener('click' , whenClicked) ;
function whenClicked() {
	console.log(data[0].score); 
	console.log(data[1].score); 
}


function generateSentence(desc,arr) {
 let usageV = " " ; 
 let printOut ;
  for (let j = 0 ; j <arr.length ; j++) {

  	usageV += arr[j] + " "  ;
  }

//printOut = "The " + desc + " are " + UsageV ;
printOut = `The ${arr.length} ${desc} are ${usageV}`;

console.log(printOut); 

}
let bestMeatArray = ["Cow" ,"beef" ,"dog"]; 
generateSentence("best meat" , bestMeatArray); */

const imgs = [
"dbz1.jpg",
"dbx.jpg",
"gokupic.jpg"
]

const div1 = document.querySelector(".div1"); 
function printingImages(arrImage)  {
	let randomContainer = " ";
 for(let i = 0 ; i <arrImage.length ; i++) { 
  
    randomContainer += `<img  alt="employed in the company" class="imagesAll" src="${arrImage[i]}" />` ;
 }
   div1.innerHTML = randomContainer ;
}

printingImages(imgs); 