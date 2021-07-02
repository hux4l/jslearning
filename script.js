'use strict';           // more secure code, avoids to introduce bugs

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("can drive");
 */

/*
// functions in JavaScript
function logger() {
    console.log("My name is Tomas");
}

// invoking, running, calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(3, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');           // also function, parameter is string returns number
 */

/*
// generic function
// functiopn declaration, we can call them before we declare them
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1988);

// function without name (anonymous)
// function expression
// we cant call them before inicialization
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}   // this is expression (produces value)

// functions are just values (we can store them in ), also as type

const age2 = calcAge2(1995);
console.log(age1, age2);
 */
/*
//function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

// arrow function, very good for one line functions, only when we have only one parameter
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 64 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, 'Tomas'));
console.log(yearsUntilRetirement(1989, 'Fero'));
 */

/////////////////////////////////////////
// function calling other functions
// cuts fruit to smaller pieces (4)
/* function fruitCutter(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */
// /* 
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 64 - age;
//     /*     if (retirement > 0) {
//             return retirement
//         } else {
//             return `${firstName} is already retired;`
//         } */

// return retirement > 0 ? retirement : `${firstName} is already retired`
//     //    return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1988, 'Tomas'));
// console.log(yearsUntilRetirement(1950, 'John'));

/*
// arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'John';

// another way to create array
const years = new Array(1988, 1989, 1998, 2010, 2021);

// most used
const friends = ['Michael', 'Steven', 'John', 2021 - 1988, friend1, years];
console.log(friends);

console.log(friends[2]);

console.log(friends.length);

// exercise
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4]),];

console.log(ages);
 */
/*
// basic arrays operations
const friends = ['Michael', 'Steven', 'John'];

//add value at end of the array, returns new array lenght
const newLenght = friends.push('Hope');

console.log(friends);
console.log(newLenght);

// add entry at begining of the array, also returns lenght of new array
friends.unshift('Marry');
console.log(friends);

// Remove last element, returns the removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);        // shows the removed element

// friends.shift()  removes first element, return removed as well

// shows the index of givent element
console.log(friends.indexOf('Marry'));

// shows if array contains element, returns true or false
console.log(friends.includes('Marry'));

// search the array but == so be careful
if (friends.includes('John')) {
    console.log("You have friend called John");
}
 */

/*
// array, but we can store it in object as well
// in array the order of values matter a lot
// we need the order to access the data
const jonasArray = [
    'Tom',
    'John',
    'Karol',
    2021 - 1988,
    'unenployed',
    ['Radoslav', 'Johny', 'Marry']
];

// object instead of array, each value is property of object (firstName, lastName, etc..)
// object used to group values, in object the order of propertis doesnt matter
// object for unorganised, unstructured data
const tomas = {
    firstName: 'Tomáš',
    lastName: 'Baška',
    age: 2021 - 1988,
    job: 'unenploied',
    friends: ['Radoslav', 'Johny', 'Marry']
}

if (tomas.job === 'unenploied') {
    console.log('You found a new job!');
    tomas.job = 'junior developer';
}
 */
/*
// dot vs bracket notation
const tomas = {
    firstName: 'Tomáš',
    lastName: 'Baška',
    age: 2021 - 1988,
    job: 'unenploied',
    friends: ['Radoslav', 'Johny', 'Marry']
}

console.log(tomas);

// . is operator calls the property
console.log(tomas.lastName);

// can be acessed as array property by caling name of property
console.log(tomas['age']);

tomas['age'] = 32;
console.log(tomas.age);

// creates the string and get the property
const nameKey = 'Name';
console.log(tomas['first' + nameKey]);
console.log(tomas['last' + nameKey]);

// when to use dot or bracked
// for first computing the property we use bracked
// any other case use dot


const interestedIn = prompt('What do you want to know about Tomáš, choose between firstName, lastName, age, job, friends');
if (tomas[interestedIn]) {
    console.log(tomas[interestedIn]);
} else {
    console.log('What do you want to know about Tomáš, choose between firstName, lastName, age, job, friends');
    // need to use brackets, that it can call it from object
}


//adds new propertis to the object
tomas.location = 'Slovakia';
tomas['twitter'] = '@hux4l';
console.log(tomas);

console.log(`${tomas.firstName} has ${tomas.friends.length} friends, his best friend is called ${tomas.friends[0]}`);

 */

// object methods
const tomas = {
    firstName: 'Tomáš',
    lastName: 'Baška',
    birthYear: 1988,
    job: 'unenploied',
    friends: ['Radoslav', 'Johny', 'Marry'],
    hasDriverLicense: true,

    // this is expression, way to make methods in objects
    // calcAge: function(birthYear) {
    //    return 2021 - birthYear;
    //}

    // using this. as variabile of object
    //calcAge: function () {
    //    return 2021 - this.birthYear;
    //}

    // crates type age
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    description: function () {
        return `${this.firstName} ${this.lastName}, birth in year ${this.birthYear}, is now ${this.age} years old. Works as ${this.job} ${this.hasDriverLicense ? 'can drive' : 'cant drive'} an has ${this.friends.length}`;
    }
};

const age = tomas.calcAge();
// using brackets
const age1 = tomas.calcAge(tomas['calcAge']());
console.log(age);

console.log(tomas.age);

console.log(tomas.description());