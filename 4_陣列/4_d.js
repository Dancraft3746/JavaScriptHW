/*
d.
 有一字串陣列內容如下
const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
請統計並印出陣列內每個字母各有幾個，
EX:
 a: 4
 c: 2
*/

const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let mySkillsToString = mySkills.join("");
let count = [];
let num=0;
count[0] = [];
count[1] = [];
for(let i=0;i<mySkillsToString.length;i++){
    let alphabet = mySkillsToString[i];
    if(count[0].indexOf(alphabet) == -1){
        count[0][num] = alphabet;
        if(count[1][num] == null){
            count[1][num] = 1
        }
        else{
            count[1][num]++;
        }
        num++;
    }
    else{
        count[1][count[0].indexOf(alphabet)]++;
    }
}
for(let i=0;i<count[0].length;i++){
    console.log(`${count[0][i]}: ${count[1][i]}`);
}
