const div1 = document.querySelector(".div1"); 
let Paragraph = document.querySelector(".Paragraph"); 

div1.innerHTML = "<button onclick='buyingOption()'> Buy! </button>" ;

function buyingOption() {
	div1.innerHTML += "<p> Thank you for coming </p>" ; 
}
