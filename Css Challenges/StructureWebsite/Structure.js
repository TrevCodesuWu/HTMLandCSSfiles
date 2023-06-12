const Image1 = document.querySelector(".Image1"); 
const Image2 = document.querySelector(".Image2"); 
const Image3 = document.querySelector(".Image3"); 
const Image4 = document.querySelector(".Image4"); 
const Image5 = document.querySelector(".Image5"); 

const jhome = document.querySelector("#jhome"); 
const jcontact = document.querySelector("#jcontact"); 
const jgames = document.querySelector("#jgames"); 
const jabout = document.querySelector("#jabout") ; 

jhome.addEventListener('click',homelink);
function homelink() {
    jhome.style="background:royalblue;box-shadow: 0 0 25px royalblue;color: white;"
    jcontact.style="background:transparent;box-shadow:0;";
    jabout.style="background:transparent;box-shadow:0;";
    jgames.style="background:transparent;box-shadow:0;";
}
jcontact.addEventListener('click',homelink2);
function homelink2() { 
    jcontact.style="background:royalblue;box-shadow: 0 0 25px royalblue;color: white;"  
    jhome.style="background:transparent;box-shadow:0 0 0 0px;";
    jabout.style="background:transparent;box-shadow:0;";
    jgames.style="background:transparent;box-shadow:0;";
}
jgames.addEventListener('click',homelink3) ;
function homelink3() {
    jgames.style="background:royalblue;box-shadow: 0 0 25px royalblue;color: white;"  
    jhome.style="background:transparent;box-shadow:0 0 0 0px;";
    jabout.style="background:transparent;box-shadow:0;";
    jcontact.style="background:transparent;box-shadow:0;";
}
jabout.addEventListener('click',homelink4) ;
function homelink4() {
    jabout.style="background:royalblue;box-shadow: 0 0 25px royalblue;color: white;"  
    jhome.style="background:transparent;box-shadow:0 0 0 0px;";
    jcontact.style="background:transparent;box-shadow:0;";
    jgames.style="background:transparent;box-shadow:0;";
}

const enterButton = document.querySelector(".enterButton"); 
const homeHeading = document.querySelector(".homeHeading"); 
const homeWords = document.querySelector(".homeWords"); 

enterButton.addEventListener('mouseover', buttonOver); 
function buttonOver() {
    homeHeading.style="color:black ; transition: all 2s; "; 
    homeWords.style="color:black; transition:all 2s"; 
}
enterButton.addEventListener('mouseout', buttonOut); 
function buttonOut() {
    homeHeading.style="color:white; transition: all 2s; "; 
    homeWords.style="color:white; transition:all 2s"; 
}
Image1.addEventListener('mouseover' , clickImage1) ;
function clickImage1() {
    Image1.style="transform:scale(1.25); transition-property:all; transition-duration:0.7s; ";
}
Image1.addEventListener('mouseout' ,ImageOut); 
function ImageOut() {
    Image1.style="width:210px; height:180px; transition-property:all; transition-duration:0.4s; "; 
}

Image2.addEventListener('mouseover' , clickImage2) ;
function clickImage2() {
    Image2.style="transform:scale(1.25); transition-property:all; transition-duration:0.7s;"; 
}
Image2.addEventListener('mouseout' ,ImageOut2); 
function ImageOut2() {
    Image2.style="width:210px; height:180px;transition-property:all; transition-duration:0.4s;"; 
}

Image3.addEventListener('mouseover' , clickImage3) ;
function clickImage3() {
    Image3.style="transform:scale(1.25);transition-property:all; transition-duration:0.7s; "; 
}
Image3.addEventListener('mouseout' ,ImageOut3); 
function ImageOut3() {
    Image3.style="width:210px; height:180px;transition-property:all; transition-duration:0.4s;"; 
}

Image4.addEventListener('mouseover' , clickImage4) ;
function clickImage4() {
    Image4.style="transform:scale(1.25);transition-property:all; transition-duration:0.7s; "; 
}
Image4.addEventListener('mouseout' ,ImageOut4); 
function ImageOut4() {
    Image4.style="width:210px; height:180px;transition-property:all; transition-duration:0.4s;"; 
}
Image5.addEventListener('mouseover' , clickImage5) ;
function clickImage5() {
    Image5.style="transform:scale(1.25); transition-property:all; transition-duration:0.7s;";
}
Image5.addEventListener('mouseout' ,ImageOut5); 
function ImageOut5() {
    Image5.style="width:210px; height:180px;transition-property:all; transition-duration:0.4s;"; 
}