"use strict";
// const wKey = document.getElementById("w-Key");
// const aKey = document.getElementById("a-key");
// const sKey = document.getElementById("s-key");
// const dKey = document.getElementById("d-key");
// const rKey = document.getElementById("r-key");
// const shiftKey = document.getElementById("shift-key");
// const ctrlKey = document.getElementById("ctrl-key");
// const spaceKey = document.getElementById("space-key");
// const chatKey = document.getElementById("chat-key");
// wKey.addEventListener("keypress", function wKey(params) {
//
// })
// aKey.addEventListener("keypress", function aKey(params) {
//
// })
// sKey.addEventListener("keypress", function sKey(params) {
//
// })
// dKey.addEventListener("keypress", function dKey(params) {
//
// })
// rKey.addEventListener("keypress", function rKey(params) {
//
// })
// shiftKey.addEventListener("keypress", function shiftKey(params) {
// })
// ctrlKey.addEventListener("keypress", function ctrlKey(params) {
//
// })
// spaceKey.addEventListener("keypress", function spaceKey(params) {
//
// })
// chatKey.addEventListener("keypress", function chatKey(params) {
//
// })
// do {
//     move
// } while (KeyPressed);

       const cheatCode = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a,Enter";
        const sercret = "v,e,n,u,s,Enter";
        const body = document.querySelector("body");
        const sound = document.getElementById("song");
        const box = document.getElementById('myBox');
        body.addEventListener("keydown", checkCode);
        //body.addEventListener("keypress", function(e){console.log("Key "+ e.key + " pressed");})
        let sequence = [];
    function checkCode(e) {
        const log = e.key;
        sequence.push(log);
        
        let seq = sequence.toString();
        if(seq.length < 1000)
            if(seq.includes(cheatCode)){
                box.innerHTML = `<h1>なに,</h1><h6>you know about God mode?</h6><button onclick="reload()">Return?</button>`
                sound.src = "assests/KonamiCode.mp3";
                sound.play();
                sound.playbackRate = 2
                body.style.animation = "godMode 1s 4";  
                console.log("sound should play");
                sequence =  [];
            }
            else if(seq.includes(sercret)){
                box.innerHTML = `<h3>Its dangerous to go in alone, take this</h3><button onclick="reload()">Return?</button>`
                sound.src = "assests/Doctor.mp3";
                sound.currentTime = 100;
                sound.play();
                sound.playbackRate = 4;
                console.log("sound should play");
                sequence =  [];
            }
            else{
                console.log(seq);
            }
        else {
            console.log("max char reached, reseting code");
            sequence = [];
        }
    }
    function reload(){
        location.reload();
    }
const leftArrowKey = document.getElementById("leftArrowKey");
  leftArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowLeft'}))});
const upArrowKey = document.getElementById("upArrowKey");
    upArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowUp'}))});
const downArrowKey = document.getElementById("downArrowKey");
    downArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowDown'}))});
const rightArrowKey = document.getElementById("rightArrowKey");
    rightArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowRight'}))});
const aKey = document.getElementById("aKey");
    aKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'a'}))});
const bKey = document.getElementById("bKey");
    bKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'b'}))});
const startKey = document.getElementById("startKey");
    startKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Enter'}))});
const fireKey = document.getElementById("fireKey");
    fireKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Space'}))});
    // body.addEventListener("keydown", moveBox);
// function moveBox(e){
// if (e.key === "w") {
//             console.log(`${e.key} keypressed`);
//             if(e.key == "W"){
//                 up -= 5;
//             }
//             else{
//                 up--;
//            }
//            console.log(box.style.top = `${up}px`);
//            box.style.top = `${up}px`;
//         }
//         if (e.key === "s") {    
//             console.log(`${e.key} keypressed`);
//             if(e.shiftKey){
//                 down -= 5
//             }
//             else{
//                 down--
//             }
//             console.log(box.style.bottom = `${down}px`);
//             box.style.bottom = `${down}px`;
//         }
//         if (e.key === "a") {
//             console.log(`${e.key} keypressed`);
//             if (e.shiftKey){
//                 left -= 5;
//             }
//             else{
//                 left--
//             }
//             console.log(box.style.left = `${left}px`);
//             box.style.left = `${left}px`;
//         }
//         if (e.key === "d") {
//             console.log(`${e.key} keypressed`);
//             if(e.shiftKey){
//                 right -= 5
//             }
//             else{
//                 right--
//             }
//             console.log(box.style.right = `${right}px`);
//             box.style.right = `${right}px`;
//         }
//     }