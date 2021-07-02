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