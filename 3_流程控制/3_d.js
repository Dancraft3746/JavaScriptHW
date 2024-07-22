/*
d.
 請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
 */

let n = 37;
let Sum = 2;
if(n > 1 && Number.isInteger(n)){

    for(let Odd = 3 ; Odd <= n ; Odd+=2){ //省去偶數
        let IsComposite = false; //是否為合數
        let rootOdd = Math.floor(Math.sqrt(Odd));
        for(let j = 2 ; j <= rootOdd ; j++){
            if(Odd % j === 0) IsComposite = true;
        }
        if(!IsComposite) Sum += Odd;
    }

    console.log(Sum);

}
else{
    console.log("請輸入大於1的正整數!");
}
