//b.請用程式算出 93784 秒，是幾天又幾小時又幾分又幾秒

let time = 93784;
let day = parseInt(time / (24*60*60));
var time_left = time % (24*60*60);
let hour = parseInt(time_left / (60*60));
time_left %= 60*60;
let min = parseInt(time_left / 60);
let sec = time_left % 60;
console.log(day+'天'+hour+'小時'+min+'分鐘'+sec+'秒');