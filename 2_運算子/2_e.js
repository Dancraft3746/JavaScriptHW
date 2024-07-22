/*e.
請設計一程式，含有 1 個正整數變數 n，可隨機印出一個介於 1~n 的整數
#### 提示1: 產生 (偽) 亂數
// 以下程式，會回傳介於 0~1 (可能為 0，但不可能為 1) 的數
Math.random();

#### 提示2: 轉換成整數
// 以下程式，會將value轉成整數並回傳
Math.trunc(value);*/

let n = 52;
let num_random = Math.trunc(Math.random()*n) + 1;
console.log(num_random);