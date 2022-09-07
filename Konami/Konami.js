"USE STRICT";

let userInput = "";	
const seq = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
const soundEffect1 = document.getElementById('sfx');
const leftArrowKey = document.getElementById('left-directional');
const rightArrowKey = document.getElementById('right-directional');
const upArrowKey = document.getElementById('up-directional');
const downArrowKey = document.getElementById('down-directional');
const startKey = document.getElementById('start-button');
const aKey = document.getElementById('a-button');
const bKey = document.getElementById('b-button');
const fireKey = document.getElementById('select-button');
let controller = document.getElementById('controller');
let pressStart = document.querySelector("#pressStart");
let img = document.getElementById('img');

leftArrowKey.addEventListener("touchend", convertToLeft_mobile);
leftArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'ArrowLeft'}))});

upArrowKey.addEventListener("touchend", convertToUp_mobile);
upArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'ArrowUp'}))});

downArrowKey.addEventListener("touchend", convertToDown_mobile);
downArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'ArrowDown'}))});

rightArrowKey.addEventListener("touchend", convertToRight_mobile);
rightArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'ArrowRight'}))});

aKey.addEventListener("touchend", convertToA_mobile);
aKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'a'}))});

bKey.addEventListener("touchend", convertToB_mobile);
bKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'b'}))});

startKey.addEventListener("touchend", convertToEnter_mobile);
startKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'Enter'}))});

fireKey.addEventListener("touchend", convertToSpace);
fireKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keyup", {'key': 'Space'}))});

document.addEventListener("touchend", function (e){
    if(userInput.includes(seq)){
        soundEffect1.play();
        img.classList.toggle("hidden");
        userInput="";
    }
});
document.addEventListener("keyup", checkCode);

pressStart.addEventListener("click", clickToShowController);

function convertToLeft_mobile(){
    userInput+="ArrowLeft"
    console.log(userInput);
}
function convertToRight_mobile(){
    userInput+="ArrowRight"
    console.log(userInput);
}
function convertToUp_mobile(){
    userInput+="ArrowUp"
    console.log(userInput);
}
function convertToDown_mobile(){
    userInput+="ArrowDown"
    console.log(userInput);
}
function convertToEnter_mobile(){
    userInput+="Enter"
    console.log(userInput);
}
function convertToA_mobile(){
    userInput+="a"
    console.log(userInput);
}
function convertToB_mobile(){
    userInput+="b"
    console.log(userInput);
}
function convertToSpace(){
    userInput+="Space"
    console.log(userInput);
}

    let imgDiv = document.getElementById("img");
    imgDiv.addEventListener("touchstart", playAnimation);
    imgDiv.addEventListener("click", playAnimation);

// function playAnimation(){
//     console.log("cl");
//     imgDiv.style.
// }


function clickToShowController(){
	console.log("clicked");
    controller.classList.toggle("hidden");
}
// function eventHandler(event, selector) {
//     event.stopPropagation(); // Stop event bubbling.
//     event.preventDefault(); // Prevent default behaviour
//     if (event.type === 'touchend') selector.off('click'); // If event type was touch turn off clicks to prevent phantom clicks.
// }
function checkCode() {
	userInput+=event.key;
    console.log(userInput);
     if(userInput.includes(seq)){
       soundEffect1.play();
       img.classList.toggle("hidden");
	   userInput="";
     }
}