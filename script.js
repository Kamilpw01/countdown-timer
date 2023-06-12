const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const newYears = '1 Jan 2024'

function countdown() {
   const newYearDate = new Date(newYears);
   const currentDate = new Date();

   const totalSeconds = (newYearDate - currentDate) / 1000;

   const daysf = Math.floor(totalSeconds / 3600 / 24);
   const hoursf = Math.floor(totalSeconds / 3600) % 24;
   const minutesf = Math.floor(totalSeconds / 60) % 60;
   const secondsf = Math.floor(totalSeconds % 60);

   console.log(daysf);

   daysEl.innerHTML = daysf;
   hoursEl.innerHTML = hoursf;
   minutesEl.innerHTML = minutesf;
   secondsEl.innerHTML = secondsf;
   // document.getElementsByClassName('hours').innerHTML = hours;


}
//initial call
countdown();

setInterval(countdown, 1000);