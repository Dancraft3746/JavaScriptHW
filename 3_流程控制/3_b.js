/*
請用迴圈印出以下內容
18 27 36 45 54 63 72 81
16 24 32 40 48 56 64
14 21 28 35 42 49
12 18 24 30 36
10 15 20 25
8 12 16
6  9
4
*/

let height = 8;
let heightString = "";
for(let i = height+1 ; i > 1 ; i--){
    for(let j=2 ; j < i+1 ; j++){
        if(j == i){
            heightString = heightString + i*j;
        }
        else{
            heightString = heightString + i*j + " ";
        }
    }
    console.log(heightString);
    heightString = "";
}