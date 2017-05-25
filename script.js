const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var sec=0;

var date = new Date();
sec = sec + 1;
let hr = date.getHours();
//let sec = date.getSeconds();
let min = date.getMinutes();
// console.log("hrs is :" , hr);
// console.log("mins is :" , min);
// console.log("secs is :" , sec);
let hrPosition = (hr*360/12) + (min*(360/60)/12) ;
let minPosition =(min*360/60) + (sec*(360/60)/60);
//let secPosition = sec*(6);
let secPosition = sec*360/60;
function RunMyClock(){
hrPosition +=(3/360);
  minPosition+=(6/60);
secPosition +=6;
//console.log("secpostn is :", secPosition);
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
};

var interval = setInterval(RunMyClock,1000);
