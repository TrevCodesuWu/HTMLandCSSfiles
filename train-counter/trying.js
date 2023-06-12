const heading1 = document.querySelector('.heading1'); 
const button1 = document.querySelector('.button1') ;

button1.addEventListener('click', function(){
 heading1.innerHTML = "boring"; 
})

heading1.addEventListener('click', function(){
 button1.innerHTML = "javascript"; 
})