// Typing animation
const textArray = ["Software Developer","Python Programmer","PHP & MySQL Developer","Problem Solver"];
let index=0;let charIndex=0;let isDeleting=false;
function type(){
const typingElement=document.querySelector(".typing");
let currentText=textArray[index];
if(!isDeleting){
    typingElement.textContent=currentText.substring(0,charIndex++);
    if(charIndex>currentText.length){isDeleting=true;setTimeout(type,1000);return;}
}else{
    typingElement.textContent=currentText.substring(0,charIndex--);
    if(charIndex<0){isDeleting=false;index=(index+1)%textArray.length;}
}
setTimeout(type,isDeleting?50:100);
}
type();

// Dark mode toggle
function toggleMode(){
document.body.classList.toggle("light-mode");
localStorage.setItem('theme', document.body.classList.contains("light-mode")?"light":"dark");
}

// Load theme from localStorage
if(localStorage.getItem('theme')==="light"){document.body.classList.add("light-mode");}