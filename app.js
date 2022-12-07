// Start StopWatch
let sec = 0;
let part__secands = 0;


// gives all Element to controll and use it
const Secands = document.getElementById("sec");
const partSecands = document.getElementById("part__of__sec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let secStarts;
let partStarts;

function SecandsFun() {
    sec++;
    sec < 10 ? sec = `0${sec}` : sec;
    Secands.textContent = `${sec}s`;
}

function Part__secandsFun() {
    part__secands++;
    part__secands == 100 ? part__secands = 0 : part__secands;
    part__secands < 10 ? (part__secands = `0${part__secands}`) : part__secands;
    partSecands.textContent = `${part__secands}ms`;
}

function startTimer() {
    startBtn.textContent = "Continue";
    secStarts = setInterval(SecandsFun, 1000);
    partStarts = setInterval(Part__secandsFun, 10);
}

function stopTimer() {
    clearInterval(secStarts);
    clearInterval(partStarts);
}
function resetTimer() {

    stopTimer()
    sec = 0;
    part__secands = 0;
    Secands.textContent = `0${0}ms`;
    partSecands.textContent = `0${0}ms`
    startBtn.textContent = "start";

}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


////////////////////////////////////////////////////////////

// Start Timer
const DivTimeInputs = document.getElementById("timer__div");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("Seconds");

let minutes = minutesInput.value;//to get value of minutes
let seconds = secondsInput.value; // to get value ogf secands



const showMinutes = document.getElementById("showminutes");
const showSeconds = document.getElementById("showSeconds");

const startsTimers = document.getElementById("startTimer");
const stopTimers = document.getElementById("stopTimer");
 
// make style show
showMinutes.textContent = minutes + "m";
showSeconds.textContent = "0" + seconds + "s";

let secandsContinue;

// to put value of nput to  h2 elements ======>minutes
minutesInput.addEventListener("input", function () {
    minutes = minutesInput.value;
    showMinutes.textContent = minutes + "m";
    startsTimers.textContent = "Start Timer";
});
// to put value of nput to  h2 elements ======>seconds
secondsInput.addEventListener("input", function () {
    seconds = secondsInput.value;
    startsTimers.textContent = "Start Timer";
    test();
});
// change value
secondsInput.addEventListener("change", function () {
    secondsInput.value = seconds;
    minutesInput.value = minutes;
});

function timer() {
    DivTimeInputs.style.display = 'none'
    if (minutes != 0) {
        secandsContinue = setInterval(function () {
            if (seconds == 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
                if (minutes == 0 && seconds == 0) {
                    stopTime()
                    alert("time is over ..............")
                }
            }
            showMinutes.textContent = minutes + "m";
            seconds < 10 ? (seconds = `0${seconds}`) : seconds;
            showSeconds.textContent = seconds + "s";
        }, 1000);
    }
}

// stop Time
function stopTime() {
    clearInterval(secandsContinue);
    startsTimers.textContent = "Continue";
    DivTimeInputs.style.display = 'flex'
}

startsTimers.addEventListener("click", timer);
stopTimers.addEventListener("click", stopTime);

// make tabs and test it
const Tabs = document.querySelectorAll("li");
const content = document.querySelectorAll(".content");

Tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        Tabs.forEach((tab) => tab.classList.remove("active"));
        tab.classList.add("active");
        content.forEach((cont) => {
            cont.classList.remove("active");
        });
        content[index].classList.add("active");
    });
});
