const showTime = document.getElementById("showTime");
const showMilliseconds = document.getElementById("ms");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
 
let startTime = 0;
let passedTime = 0;
let currentTime = 0;
let pausedState = true;
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let msDisplay;

start.addEventListener('click', ()=>{
    if(pausedState){
        pausedState = false;
        startTime = Date.now() - passedTime;
        interval = setInterval(updateTime, 100)
    }
});
pause.addEventListener('click', ()=>{
    if(!pausedState){
        pausedState = true;
        passedTime = Date.now() - startTime;
        clearInterval(interval);
    }
});

reset.addEventListener('click', resetFunction);

function updateTime(){
    passedTime = Date.now() - startTime;
    milliseconds = Math.floor((passedTime % 1000) / 10);
    seconds = Math.floor((passedTime / 1000) % 60);
    minutes = Math.floor((passedTime / (1000*60)) % 60);
    hours = Math.floor((passedTime / (1000*3600)) % 60);

    seconds = addZero(seconds);
    minutes = addZero(minutes);
    hours = addZero(hours);
    milliseconds = addZero(milliseconds);
    showTime.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    function addZero(unitTime){
        if((("0")+ unitTime).length > 2) return unitTime
        else return "0" + unitTime
    }
}
function resetFunction(){
    pausedState = true;
    clearInterval(interval);
    startTime = 0;
    passedTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    showTime.textContent = "00:00:00:00";

}