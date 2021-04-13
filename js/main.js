"use strict";
let svgHours = document.querySelector("#hours"),
  svgMinutes = document.querySelector("#minutes"),
  hoursDigit1 = document.querySelector("#hours-digit1"),
  hoursDigit2 = document.querySelector("#hours-digit2"),
  minutesDigit1 = document.querySelector("#minutes-digit1"),
  minutesDigit2 = document.querySelector("#minutes-digit2");

function updateClock() {
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    degMinutes = 180 + 360 / 60 * minutes,
    degHours = 180 + 360 / 12 * (hours % 12) + degMinutes / 60;
  if (hours < 10) {
    hours = '0' + hours;
  }
  let secondHourDigit = hours % 10,
  firstHourDigit = Math.floor(hours / 10);
  hoursDigit2.innerHTML = secondHourDigit;
  hoursDigit1.innerHTML = firstHourDigit;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let secondMinuteDigit = minutes % 10,
  firstMinuteDigit = Math.floor(minutes / 10);
  minutesDigit2.innerHTML = secondMinuteDigit;
  minutesDigit1.innerHTML = firstMinuteDigit;
  svgHours.setAttribute('transform', `translate(207,205) rotate(${degHours} 0 0)`);
  svgMinutes.setAttribute('transform', `translate(207,205) rotate(${degMinutes} 0 0)`);
}
let timerId;
function clockStart() {
  timerId = setInterval(updateClock, 1000);
  updateClock();
}
clockStart();