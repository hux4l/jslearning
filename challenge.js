'use '
// calculates the average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);


// cheks for the winner, winner is only when one team has more than double points as the other team
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log(`No team wins.`);
    }
}

checkWinner(averageDolphins, averageKoalas);

const averageDolphins1 = calcAverage(85, 54, 41);
const averageKoalas1 = calcAverage(23, 34, 27);

checkWinner(averageDolphins1, averageKoalas1);