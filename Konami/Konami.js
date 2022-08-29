"use strict";
//need to push any keypress into userInput
let userInput = "";
//sequence to activate 30 lives
const seq = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter";
const soundEffect1 = document.getElementById("sfx");



//need to add event listeners to all divs for the controller buttons.
//each button will equal corresponding keyboard presses
//utilize existing function 'addFunctionality' to listen for the correct sequence

const lBtn = document.getElementById('left-directional');
lBtn.addEventListener("touchend", convertToLeft);
function convertToLeft(){
    userInput+="ArrowLeft"
    console.log(userInput);
}

const rBtn = document.getElementById('right-directional');
rBtn.addEventListener("touchend", convertToRight);
function convertToRight(){
    userInput+="ArrowRight"
    console.log(userInput);
}
const uBtn = document.getElementById('up-directional');
uBtn.addEventListener("touchend", convertToUp);
function convertToUp(){
    userInput+="ArrowUp"
    console.log(userInput);
}
const dBtn = document.getElementById('down-directional');
dBtn.addEventListener("touchend", convertToDown);
function convertToDown(){
    userInput+="ArrowDown"
    console.log(userInput);
}
const stBtn = document.getElementById('start-button');
stBtn.addEventListener("touchend", convertToEnter);
function convertToEnter(){
    userInput+="Enter"
    console.log(userInput);
}
const aBtn = document.getElementById('a-button');
aBtn.addEventListener("touchend", convertToA);
function convertToA(){
    userInput+="a"
    console.log(userInput);
}
const bBtn = document.getElementById('b-button');
bBtn.addEventListener("touchend", convertToB);
function convertToB(){
    userInput+="b"
    console.log(userInput);
}
document.addEventListener("touchend", function (e){
    if(userInput.includes(seq)){
        do{
            soundEffect1.play();
        }while(1<0);
        //make controller go away here
        hideController();
        showKonamiSpin();
    }
})

//function here that makes controller go away
function hideController(){
    let controllerId = document.getElementById("controller");
    controllerId.classList.toggle("hidden");
}

let controller = document.getElementById("controller");
let pressStart = document.querySelector("#pressStart");
pressStart.addEventListener("click", clickToShowController)
function clickToShowController(){
    //show a clickable controller div ontop of press Start area
    // soundEffect1.play();
    controller.classList.toggle("hidden");
}

// function showController(){
// let img = document.querySelector("#controller");
// img.style.display = "block";
// alert("This works!!");
// }



// this  is to capture the key and output to console
// document.addEventListener("keyup", function(event) {
//   console.log(event.key);
// });

// var image = new Image();
// image.src =“img/konamiController.webp”;
// document.body.appendChild(image);

function showKonamiSpin(){
    let img = document.getElementById("img");
    img.style.display = "block";
}
function hideBox(){
    let input = document.getElementById("input");
    input.style.display = "none";
}

function addFunctionality(){
    //this adds a listener for anything typed into the entire body
    document.addEventListener("keyup", function(event) {
        //code here to store keypress to userInput
        //need to reference userInput
        userInput+=event.key;
        // console.log(userInput)
        if(userInput.includes(seq)){
            soundEffect1.play();
            // hideBox();
            showKonamiSpin();
            // alert("You have added 30 lives!")
        }
    });
}
addFunctionality();
//code to check if user input fulfills seq
// if(userInput === seq){
//   alert("You have added 30 lives!")
// }
