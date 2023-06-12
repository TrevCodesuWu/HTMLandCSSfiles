const button1 = document.querySelector(".button1"); 
const button2 = document.querySelector(".button2"); 
const button3 = document.querySelector(".button3"); 

let textbox = document.querySelector(".textbox"); 
const unOrdered  = document.querySelector(".unOrdered"); 
// Use the keyword .value to get the value of a input box 
let myLeads = []; 
button1.addEventListener('click',saveInput); 

// leadsFromLocalStorage.clear();
 let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); 
console.log(leadsFromLocalStorage); 

if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage ; 
  renderLeads(myLeads); 
}

function saveInput(){
  myLeads.push(textbox.value); 	 
  textbox.value = " ";
 
localStorage.setItem("myLeads",JSON.stringify(myLeads)); 
renderLeads(myLeads); 
console.log(localStorage.getItem("myLeads")); 

} 

function renderLeads(thingArray) {
 let listItems = " " ; 
 for (let i = 0; i< thingArray.length ; i++) {
 
  // listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>"+ myLeads[i] +"</a> </li>" ; 
  //This is template string , line 20 to  25 
  listItems += `<li>
                    <a target='_blank' href='${thingArray[i]}'>
                    ${thingArray[i]}

                    </a> 
                 </li>`
 
 /* Another way to do it(line 18) is  below :
  const Li = document.createElement("li"); 
  Li.textContent = myLeads[i]; 
  unOrdered.append(Li);  */ 
  }  
  unOrdered.innerHTML = listItems ;
}

button2.addEventListener('dblclick' , deleteAll); 
function deleteAll() {

 myLeads = []; 
 localStorage.clear(); 
 renderLeads(myLeads); 

}
const tabs = [
{url:"https://www.linkedin.com/in/per-harald-borgan/"}
             ]


button3.addEventListener('click' , saveTab) ;
function saveTab() {
  
chrome.tabs.query({active:true , currentWindow:true},function(tabs){
myLeads.push(tabs[0].url); 
localStorage.setItem("myLeads",JSON.stringify(myLeads)); 
renderLeads(myLeads); 

}); 

}



















