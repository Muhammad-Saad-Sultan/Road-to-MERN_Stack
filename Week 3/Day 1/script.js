// Counter Increment....................
function counter() {
    let count = 0;
    
    return function incCounter() {
        count++;
        return count;
    }
}

const myCounter = counter();
for(let i = 0; i < 5; i++) {
    console.log(myCounter());
}

// Personalized Greetings....................
function callGreetings() {
    let name = 'Saad';

    return function greetings() {
        let greet = `Hello ${name}`;
        return greet;
    }
}

let greet = callGreetings();

console.log(greet);
name = 'hamza';
console.log(greet());

// Rate-Limiter....................
function rateLimiter(val) {
    let limit = 0;
    return function display() {
        if (limit < val) {
            limit++;
            return 'Limit not reached yet...';
        } else {
            return 'Limit reached...';
        }
    }
}

const limiter = rateLimiter(5);
for(let i = 0; i < 7; i++) {
    console.log(limiter());
}

// Map-Array (.map())....................
function mapArray(arr, cb) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }
    return result;
}

function mapping(element, i, arr) {
    return element*2;
}

let arr = [1,2,3,4,5];
let arr2 = mapArray(arr, mapping);

console.log(arr);
console.log(arr2);

// Filter-Array (.filter())....................
function filterArray(arr) {
    let result = [];
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(filter(arr[i], i, arr));
    }
    console.log(result);
    for(let i = 0; i < result.length; i++) {
        if(result[i] === undefined) {
            temp.push(i);
        }
    }
    console.log(temp);
    for(let i = 0; i < temp.length; i++) {
        if(i === 0) {
            result.splice(temp[i], 1);
        } else {
            result.splice(temp[i] - i, 1);
        }
    }
    return result;
}

function filter(element, i, arr) {
    if(element % 2 === 0) {
        return element;
    }
    return;
}

let arr3 = filterArray(arr);
console.log(arr3);