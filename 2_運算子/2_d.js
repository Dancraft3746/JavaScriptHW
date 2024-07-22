/*d.Reds 在寫 JavaScript 作業，
電腦開機需要 1 分鐘，打開 VS Code 需要 2 分鐘，寫 1 題作業需要 3 分鐘，且 Reds 每天都會將電腦關機。
Reds 分 2 天寫，第一天連續寫 3 題目，第二天連續寫 2 題。
請用程式算出 Reds 共花多少時間*/

let 開關機 = 1;
let Open_VS_Code = 2;
let 作業 = 3;
let time = 開關機 + Open_VS_Code + 作業*3 + 開關機
            + 開關機 + Open_VS_Code + 作業*2 + 開關機;

console.log(`Reds共花${time}分鐘做作業`);