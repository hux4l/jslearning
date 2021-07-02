'use strict';

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },

    descritpion: function () {
        return `${this.firstName} ${this.lastName}'s BMI (${this.calcBMI()})`
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },

    descritpion: function () {
        return `${this.firstName} ${this.lastName}'s BMI (${this.calcBMI()})`
    }
};

mark.calcBMI();
// if we dont call the method before, will not exist property bmi
console.log(mark.bmi);
console.log(john.descritpion());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.descritpion()} is higher than ${john.descritpion()}!`);
} else {
    console.log(`${john.descritpion()} is higher than ${mark.descritpion()}!`);
}