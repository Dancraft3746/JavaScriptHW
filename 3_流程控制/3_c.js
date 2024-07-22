/*c.
請用迴圈印出以下內容..
2 5 8 11 14 17 20 23 26 29 32
*/

let length = 11;
let Num = 2;
let lengthString = "";
for(let i = 0 ; i < length ; i++){
    lengthString = lengthString + Num + " ";
    Num += 3;
}
console.log(lengthString);