hoursJS = document.querySelector("#hours");
minutesJS = document.querySelector("#minutes");
secondsJS = document.querySelector("#seconds");
btn = document.querySelector("#btn");

let minutesJSdegres;
let hoursJSdegres;
let secondsJSdegres;

secondWrapper = document.querySelector("#secondWrapper");

function logTime() {
  let now = new Date();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let seconds = now.getSeconds();

  minutesJSdegres = (minutes / 60) * 360;
  secondsJSdegres = (seconds / 60) * 360;
  hoursJSdegres = (hours / 60) * 360;

  hoursJS.innerText = hours;
  minutesJS.innerText = minutes;
  secondsJS.innerText = seconds;
}

console.log(secondWrapper.style);
setInterval(logTime, 1000);

function secondTimer() {
  secondWrapper.style.transform = "rotate(" + secondsJSdegres + "deg)";
}
setInterval(secondTimer, 1000);
