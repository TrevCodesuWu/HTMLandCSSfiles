const button1 = document.querySelector(".button1"); 
let textbox = document.querySelector(".textbox"); 
const unOrdered  = document.querySelector(".unOrdered"); 
// Use the keyword .value to get the value of a input box 
let myLeads = []; 
button1.addEventListener('click',saveInput); 

function saveInput(){
  myLeads.push(textbox.value); 	
  textbox.value = " "; 
  renderLeads(); 
} 

function renderLeads() {
 let listItems = " " ; 
 for (let i = 0; i< myLeads.length ; i++) {
 
  // listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>"+ myLeads[i] +"</a> </li>" ; 
  //This is template string , line 20 to  25 
  listItems += `<li>
                    <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}

                    </a> 
                 </li>`

 /* Another way to do it(line 18) is  below :
  const Li = document.createElement("li"); 
  Li.textContent = myLeads[i]; 
  unOrdered.append(Li);  */ 
  }  
  unOrdered.innerHTML = listItems ;
}

