var hihat=document.getElementById("hi-hat");
var snare=document.getElementById("snare");
var bassdrum=document.getElementById("bassdrum");
var hightam=document.getElementById("hightam");
var middletam=document.getElementById("middletam");
var lowtam=document.getElementById("lowtam");
var ride=document.getElementById("ride");

let hihatSound= new Audio('hihatsound.wav');
let snareSound= new Audio('snaresound2.wav');
let bassdrumSound= new Audio('bassdrumsound2.wav');
let hightamSound= new Audio('hightamsound.wav');
let middletamSound= new Audio('middletamsound.wav');
let lowtamSound= new Audio('lowtamsound.wav');
let rideSound= new Audio('ridesound2.wav');

document.addEventListener("keydown",(e) => { //여기 document.addEvent임 아니면 hihat.add 임?
    if(e.code === "KeyF"){
        console.log("hi hi-hat");
        hihat.setAttribute("hi-hat",'hover')
        hihat.style.transform="scale(1.1)";
        hihatSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyF"){
        hihat.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyV"){
        console.log("hi snare");
        snare.style.transform="scale(1.1)";
        snareSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyV"){
        snare.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyB"){
        console.log("hi bassdrum");
        bassdrum.style.transform="scale(1.1)";
        bassdrumSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyB"){
        bassdrum.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyG"){
        console.log("hi hightam");
        hightam.style.transform="scale(1.1)";
        hightamSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyG"){
        hightam.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyH"){
        console.log("hi middletam");
        middletam.style.transform="scale(1.1)";
        middletamSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyH"){
        middletam.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyN"){
        console.log("hi lowtam");
        lowtam.style.transform="scale(1.1)";
        lowtamSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyN"){
        lowtam.style.transform="scale(1)";
    }
});
document.addEventListener("keydown",(e) => {
    if(e.code === "KeyJ"){
        console.log("hi ride");
        ride.style.transform="scale(1.1)";
        rideSound.play();
    }
});
document.addEventListener("keyup",(e) => {
    if(e.code === "KeyJ"){
        ride.style.transform="scale(1)";
    }
});
