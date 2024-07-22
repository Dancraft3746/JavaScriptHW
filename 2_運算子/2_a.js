//a.請用程式算出 1 天又 10 小時又 17 分又 36 秒，共等於幾秒

let sec = 36;
let min = 17;
let hour = 10;
let day = 1;

let time = ((day*24 + hour)*60 + min)*60 + sec;
console.log(time);