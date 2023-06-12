const username = document.querySelector("#userName"); 
const password = document.querySelector("#passWord"); 
const button1 = document.querySelector(".button1"); 
const error = document.querySelector(".error");
let link1 = document.querySelector("#linkk"); 

button1.addEventListener('click' , submit); 
console.log(localStorage); 
function submit() 
{
	if (username.value !="" && password.value !="") 
	{
             let Username = username.value;
	         localStorage.setItem("Password",password.value); 
	         localStorage.setItem("hello",Username); 
	         console.log(localStorage.getItem("hello"));
	         console.log(localStorage.getItem("Password")); 
	         error.innerHTML="";  
	}
	else 
	{
		console.log("You did not enter any value");
        error.innerHTML = "Enter all the values"; 
	}
}

link1.addEventListener('click',Account); 
function Account() {
 button1.innerHTML = " "; 
}

 