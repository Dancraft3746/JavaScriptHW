//a.有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和

let n=12;
let sum = 0;
for(let i=3;i <= n;i+=3){ //3的倍數
    sum += i;
}
for(let i=4;i <= n;i+=4){ //4的倍數
    sum += i;
}
for(let i=12;i <= n;i+=12){// 3和4共同的倍數重複算要減掉
    sum -= i;
}
console.log('正整數n，1~n之內，3的倍數和4的倍數的總和: '+sum);