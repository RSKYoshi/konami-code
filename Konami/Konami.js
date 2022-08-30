"USE STRICT";
let userInput = "";	
const seq = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter";
const soundEffect1 = document.getElementById("sfx");
const leftArrowKey = document.getElementById('left-directional');
const rightArrowKey = document.getElementById('right-directional');
const upArrowKey = document.getElementById('up-directional');
const downArrowKey = document.getElementById('down-directional');
const startKey = document.getElementById('start-button');
const aKey = document.getElementById('a-button');
const bKey = document.getElementById('b-button');
const fireKey = document.getElementById('select-button');
let controller = document.getElementById("controller");
let pressStart = document.querySelector("#pressStart");
let img = document.getElementById("img");
leftArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowLeft'}))});
upArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowUp'}))});
downArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowDown'}))});
rightArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowRight'}))});
aKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'a'}))});
bKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'b'}))});
startKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Enter'}))});
fireKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Space'}))});
document.addEventListener("keyup", checkCode);
pressStart.addEventListener("click", clickToShowController);
function clickToShowController(){
	console.log("clicked");
    controller.classList.toggle("hidden");
}
function checkCode() {
	userInput+=event.key;
    console.log(userInput);
     if(userInput.includes(seq)){
       soundEffect1.play();
       img.classList.toggle("hidden");
	   userInput="";
     }
}