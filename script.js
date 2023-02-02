
if (navigator.serviceWorker) {
    navigator.serviceWorker.register (
        '/stopwatch-pwa/sw.js',
        {scope: '/stopwatch-pwa/'}
    )
}

const box = document.getElementById("box");
const secondsDisplay = document.getElementById("seconds");
const tensDisplay = document.getElementById("tens");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

var interval;
var seconds = 0;
var tens = 0;

buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(increment, 10);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    updateTimer();
}

function increment() {
    tens++;
    if (tens >= 100) {
        seconds++;
        tens = 0;
    }
    updateTimer();
}

function updateTimer() {
    tensDisplay.innerHTML = tens >= 10 ? tens : "0" + tens;
    secondsDisplay.innerHTML = seconds >= 10 ? seconds : "0" + seconds;
}
