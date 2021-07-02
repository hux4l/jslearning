'use strict';

const countryName = 'Slovakia';
const countryPopulation = 5500000;
const countyLanguage = 'Slovak';
const capitalCity = 'Bratislava';


// function that takes as parameters country name, population and its capital and return it as string
function describeCountry(country, population, capitalCity) {
    return `${country} has a ${population} milion people and its capital city is ${capitalCity}`;
}

console.log(describeCountry(countryName, countryPopulation, capitalCity));

console.log(describeCountry('Finland', 6000000, 'Helsinki'));

console.log(describeCountry('Czech Republic', 10000000, 'Prague'));

// function declarations
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100
}

const country1 = percentageOfWorld1(countryPopulation);
const country2 = percentageOfWorld1(1441000000);
const country3 = percentageOfWorld1(10000000);

console.log(country1);
console.log(country2);
console.log(country3);

// function expressions
const percentageOfWorld2 = function (population) { return population / 7900000000 * 100 };

console.log(percentageOfWorld2(countryPopulation));
console.log(percentageOfWorld2(1441000000));
console.log(percentageOfWorld2(10000000));

const percentageOfWorld3 = population => population / 7900000000 * 100;
console.log(percentageOfWorld3(countryPopulation));
console.log(percentageOfWorld3(1441000000));
console.log(percentageOfWorld3(10000000));

// creates a description of entered country with name and population
function describePopulation(country, population) {
    const percentPopulation = percentageOfWorld1(population);
    return `${country} has a ${population} milion people, which is about ${percentPopulation} of the world population`;
}

console.log(describePopulation(countryName, countryPopulation));
console.log(describePopulation('China', 1441000000));
console.log(describePopulation('Finland', 6000000));

// array of populations of choosen countrys
const populations = [countryPopulation, 1441000000, 10000000, 6000000];
// if array had lenght of 4 returns true
if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

console.log(populations);

// Array of percentages of world population of chosen countrys
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]),];

console.log(percentages);

// array of neighbour countrys of Slovakia
const neighbours = ['Poland', 'Ukraine', 'Czech Republic', 'Austria', 'Hungaria'];
console.log(neighbours);

// add Utopia country ond end of the neighbours array
neighbours.push('Utopia');
console.log(neighbours);

// removes the last entry Utopia from neighbours array
neighbours.pop('Utopia');
console.log(neighbours);

// checks if neighbours contains germany
if (neighbours.includes('Germany')) {
    console.log("Your country neighbour is Germany");
} else {
    console.log("Your couyntry hasnt border with Germany");
}

// checks the index of Hungaria and replaces value to Hungary
const replace = neighbours.indexOf('Hungaria');
neighbours[replace] = 'Hungary';
console.log(neighbours);

// object MyCountry containing infomration about my country
const myCountry = {
    country: 'SLovakia',
    capital: 'Bratislava',
    language: 'Slovak',
    population: 5500000,
    neighbours: ['Poland', 'Ukraine', 'Hungary', 'Austira', 'Czech Republic',],

    // creates a string to describe country
    description: function () {
        return `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}`;
    },

    // checks if country in object is Island or not
    checkIsland: function () {
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
};

console.log(myCountry);

// String informatiokn about country
console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);

console.log(myCountry.population += 2000000);
console.log(myCountry['population'] -= 2000000);

console.log(myCountry.description());

// checks if country is Island
const island = myCountry.checkIsland();
console.log(island);

// logs the number of Voter currently voting
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

// creates array called percentages2 and calculates the values for each country in array populations
const percentages2 = new Array();
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
}

// chceks if array populations and percentages2 have the same amount of values
const sameValues = populations.length === percentages2.length ? 'same number of values' : 'something is wrong';
console.log(sameValues);