// five variables declared using let and const.....

let a = 10;
let b = 3.477;
let c = "apple";
const d = true;
const e = ["a", "ab", "abc", "abcd"];

// function to sum two numbers.....

let num1 = 10, num2 = 20;
function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(`Sum of ${num1} and ${num2} is equal to ${sum(num1, num2)}.`);



// function to reverse a string.....

let str = "apple";
function revStr(str) {
    let len = str.length;
    let slicedArr = [];
    for(i = 0; i < len; i++) {
        slicedArr[i] = str[len-1-i];
    }
    console.log(slicedArr.join(''));
}
revStr(str);


// function to check num is even or odd.....

let numArr = [1, 2, 3, 4, 5];

numArr.forEach((e) => {
    if(e % 2 == 0) {
        console.log(`${e} is an even number.`);
    } else {
        console.log(`${e} is an odd number.`);
    }
});

