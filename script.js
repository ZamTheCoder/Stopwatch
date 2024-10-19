window.onload = function () {
var seconds =  0;
var milliseconds = 0;
var appendmilliseconds = document.getElementById("Milliseconds");
var appendseconds = document.getElementById("Seconds");
var start = document.getElementById("Start");
var stop = document.getElementById("Stop");
var reset = document.getElementById("Reset");
var Interval;

start.onclick = function (){
clearInterval(Interval);
Interval = setInterval(startTimer, 10);
}

stop.onclick = function (){

clearInterval(Interval);
}

reset.onclick = function (){
    clearInterval(Interval);
    milliseconds = "0";
    seconds = "0";
    appendmilliseconds.innerHTML = milliseconds;
    appendseconds.innerHTML = seconds;
}

function startTimer (){
milliseconds++;

if (milliseconds <= 9) {
    appendmilliseconds.innerHTML = "0" + milliseconds;
}
if (milliseconds > 9) {
    appendmilliseconds.innerHTML = milliseconds;
}

if (milliseconds > 99) {
    seconds++;
    appendseconds.innerHTML = "0" = seconds;
    milliseconds = "0"
appendmilliseconds.innerHTML = "0" + 0
}

if (seconds > 9) {
    appendseconds.innerHTML = seconds;

}
}

}

















