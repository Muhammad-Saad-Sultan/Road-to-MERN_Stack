// Array of 10 numbers.....

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use .filter() to get only even numbers from array.....

let arr2 = arr.filter((num) => {
    return num % 2 == 0;
});
console.log(`Extracting even numbers using .filter(): ${arr2}`);

// Use .map() to double each number of array.....

let arr3 = arr.map((num) => {
    return num * 2;
});
console.log(`Double of each number using .map(): ${arr3}`);

// Use .reduce() to get sum of all the numbers of an array.....

let sum = 0
let add = arr.reduce((sum, num) => {
    return sum + num;
});
console.log(`Sum of all the numbers using .reduce(): ${add}`);

// Array of 5 objects.....

let students = [
    {
        name: 'Ali',
        age: 20,
        grade: '70'
    },
    {
        name: 'Ahmad',
        age: 22,
        grade: '81'
    },
    {
        name: 'Sania',
        age: 21,
        grade: '83'
    },
    {
        name: 'Mohsin',
        age: 19,
        grade: '94'
    },
    {
        name: 'Zohaib',
        age: 23,
        grade: '65'
    }
];

// function to extract students having grade above 80.....

function grade(student) {
    let grades = [];
    students.forEach((student) => {
        if(student.grade > 80) {
            grades.push(student);
        }
    });
    return grades;
}
console.log(`Students having grade above 80: `, grade(students));

// function to calculate average age among all students.....

function avgAge(students) {
    let ages = 0;
    students.forEach((student, i) => {
        ages += student.age;
    });
    let avgAge = ages / students.length;
    return avgAge;
}
console.log(`Average age among all the students: ${avgAge(students)}`);

// function to count repetitive strings among an array.....

let fruits = ['apple', 'banana', 'apple'];
function fruitCount(fruits) {
    let uniqueFruits = [];
    let fruitCount = {};
    fruits.forEach((fruit) => {
        if(uniqueFruits.includes(fruit)) {
            fruitCount[fruit] += 1;
            return;
        } else {
            uniqueFruits.push(fruit);
            fruitCount[fruit] = 1;
        }
    });
    return fruitCount;
}
console.log(`Total number of each fruit: `, fruitCount(fruits));

// for-loop for printing 1 to 20.....

let countArr = [];
for(let i=0; i<20; i++) {
    countArr[i] = i+1;
}
console.log(`Counting from 1 to 20 printed using for loop: ${countArr}`);

// while-loop for printing 1 to 20.....

i=0;
countArr = [];
while(i<20) {
    countArr[i] = ++i;
}
console.log(`Counting from 1 to 20 printed using while loop: ${countArr}`);

// forEach-loop for printing 1 to 20.....

let numArr = []
for(let i=0; i<20; i++) {
    numArr[i] = i;
}
countArr = [];
numArr.forEach((num, i) => {
    countArr[i] = i+1;
})
console.log(`Counting from 1 to 20 printed using forEach loop: ${countArr}`);
