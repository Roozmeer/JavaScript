const country = "The Netherlands";
const continent = "Europe";
let population = 17.4;
// let population = 13;
// let population = 130;

const isIsland = false;
const language = 'Dutch';

const halfPopulation = population / 2;
const populationFinland = 6;
const averagePopulation = 33;

const description = `${country} is in ${continent}, and there are ${population} million people speaking ${language}`;

// const description = country + ' is in ' + continent + ', and there are ' + population + ' million people speaking ' + language;

// console.log(country);
// console.log(continent);
// console.log(population);


// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(halfPopulation);

// population++;
// console.log(population);

console.log(population > populationFinland);
console.log(population < averagePopulation);
console.log(description);

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    const populationDifference = averagePopulation - population;
    console.log(`${country}'s population is ${populationDifference} million below average`)
}