const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn');
const counter = document.querySelector('.counter');

let tenMS = 0;
let timerID = null;

const updateCounter = () => {
    const minutes = Math.floor((tenMS / 6000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const seconds = Math.floor((tenMS / 100) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
    const ms = (tenMS % 100).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    counter.innerHTML = `${minutes}:${seconds}:${ms}`;
}

const startTimer = () => {
    tenMS++;
    updateCounter();
};


startBtn.addEventListener('click', () => {
    timerID = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerID); 
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerID);
    tenMS = 0;
    updateCounter();
})