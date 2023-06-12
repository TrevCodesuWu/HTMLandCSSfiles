/*//This is used to set the key value pairs 
localStorage.setItem("myName","Naicker"); 
//This is used to get the key value pairs and display it on the console
console.log(localStorage.getItem("myName")); 
//This is used to clear the values in the local Storage 
localStorage.clear(); 
 

 let myArray = ["Trevlin" ,"Kylan" ,"Joshua" ,"Jeremiah"]
 //How to stringify an Array so it can go into local storage ?:
       //You can use backticks`` or you can use this line of code : 
 myArray = JSON.stringify(myArray); 

console.log(typeof myArray); //This will display what datatype the thing is keyword 'typeof'
//How to add another value if the array is now a string ? Use this : 
myArray = JSON.parse(myArray); //This will convert it back to an array 
myArray.push("Shaolin"); //This will push the value inside the array at the end 
console.log(myArray); //Log it out into the console 

myArray = JSON.stringify(myArray); //Turn it into a string value for localStorage
myArray = JSON.parse(myArray);  //Turning it back into an array 
myArray.push("Rakheel"); //Adding another value to the array 
console.log(myArray);
 */ 

let myLeads = `["www.awesomelead.com"]`; 
myLeads = JSON.parse(myLeads); 

myLeads.push("www.google.com" ); 

myLeads = JSON.stringify(myLeads); 

console.log(typeof myLeads);
myLeads = JSON.parse(myLeads); 
console.log(myLeads);   