/*
a.
請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
*/

let randomArr = [];
let Num = 5;
let Max = 9;
let element;
for(let i=0;i<Num;i++){
    do{
        element = Math.floor(Math.random()*(Max+1));
    }while(randomArr.indexOf(element) != -1);
    randomArr[i] = element;
}
console.log(`${randomArr}`);

/*
b.
(續上題) 請印出陣列所有元素的總和、平均值
*/

let Sum = 0, Avg;
for(let i=0;i<Num;i++){
    Sum += randomArr[i];
}
Avg = Sum / Num;
console.log(`陣列總和:${Sum}\n陣列平均值:${Avg}`);

/*
c.
(續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
*/

let sortArr = randomArr.sort();
console.log(`${sortArr}`);

let index = randomArr.indexOf(Avg);
if(index > 0){
    console.log(`元素值等於平均值之索引${index}`);
}
else{
    for(let i=1;i<Num;i++){
        if(Avg < sortArr[i]){
            console.log(`平均值位於索引${i-1}與${i}之間`);
            break;
        }
    }
}