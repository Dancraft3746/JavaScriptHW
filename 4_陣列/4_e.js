/*
e.
請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
     [
         [ 18, 27, 36, 45, 54, 63, 72, 81 ],
         [ 16, 24, 32, 40, 48, 56, 64 ],
         [ 14, 21, 28, 35, 42, 49 ],
         [ 12, 18, 24, 30, 36 ],
         [ 10, 15, 20, 25 ],
         [ 8, 12, 16 ],
         [ 6, 9 ],
         [ 4 ]
    ]
*/

let height = 8;
let Arr = [];
let length = 0, width = 0;
for(let i = height+1 ; i > 1 ; i--){
    Arr[length] = [];
    for(let j=2 ; j < i+1 ; j++){
        Arr[length][width] = i*j;
        width++;
    }
    width = 0;
    length++;
}
console.log(Arr);