'use strict'

// calculates tip based on how big the bill is
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
    //  return bill >= 50 && <= 300 ? bill * 0.15 : bill * 0.2;       // same as above
    //  const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

}

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

// array of calculated tips based on bills
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// array of total values with tips
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals = [];

// calculates tip for every value in bill aray and stores it in tips2 array, as well calculates total value with tip and stores it in totals array
for (let i = 0; i < bills2.length; i++) {
    // calculate tip, using function calcTip and store to tips2 array
    tips2[i] = calcTip(bills2[i]);
    // tips.push(calcTip(bills[i]));
    // calculate total value, store in total array
    totals[i] = bills2[i] + tips2[i];
}

console.log(bills2, tips2, totals);

// calculate average of the numbers in array that is passed as argument
function calcAverage(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;
    return average;
}

console.log(`Avverage value of Steven's total bills is ${calcAverage(totals)}`);