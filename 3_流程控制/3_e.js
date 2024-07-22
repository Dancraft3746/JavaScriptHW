/*
e.
請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
 *註: 需考慮閏年
 */

let year = 2024;
let month = 7;
let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day = monthDay[month-1];
if((( year%4==0 && year%100 != 0 ) || year%400==0) && month == 2){ //判斷是否為閏年2月
    day = 29;
}
console.log(`${year}年${month}月有${day}天`);

