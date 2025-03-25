var hourHand = new Date().getHours();
var minuteHand = new Date().getMinutes();
var secondHand = new Date().getSeconds();

var hourTime = document.querySelector(".hour");
hourTime.innerHTML = hourHand;

var minutesTime = document.querySelector(".minute");
minutesTime.innerHTML = ":"+" " + minuteHand;

var secondTime = document.querySelector(".second");
secondTime.innerHTML = ":" + " " + secondHand;