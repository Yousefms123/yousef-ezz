let seconds = 00;
let tens = 00;
let outputseconds = document.getElementById("seconds");
let outputtens = document.getElementById("tens");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let Interval;
const clickStart = () => {
   clearInterval(Interval);
   Interval = setInterval(Starttime, 10);
};
// startBtn.addEventlistener("click", clickStart);
const clickStop = () => {
   clearInterval(Interval);
};
// stopBtn.addEventlistener("click", clickStop);
const clickRest = () => {
   clearInterval(Interval);
   tens = "00";
   seconds = "00";
   outputseconds.innerHTML = seconds;
   outputtens.innerHTML = tens;
};
// resetBtn.addEventlistener("click", clickRest);

const Starttime = () => {
   tens++;
   if (tens <= 9) {
      outputtens.innerHTML = "0" + tens;
   }
   if (tens > 9) {
      outputtens.innerHTML = tens;
   }
   if (tens > 99) {
      seconds++;
      outputseconds.innerHTML = "0" + seconds;
      tens = 0;
      outputtens.innerHTML = "0" + tens;
   }
   if (seconds > 9) {
      outputseconds.innerHTML = seconds;
   }
};
console.log(Starttime());
