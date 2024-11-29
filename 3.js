`use strict`
//sham hason
const numbers = [0, 5, 1, 0, 2, 0, 6, 0, 0, 2, 1, 9, 0];

let count=0;
for(let i=0 ; i<numbers.length;i++){
    count+= (numbers[i]===0)? 1 : 0;
}

console.log(count);





