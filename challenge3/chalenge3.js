/*
There are two gymnastic teams(Dolphins and Koalas).

1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the
winner of the competition, and print it to the console.
Don't forget that there can be a draw, so
test for that as well (draw means they have the same
 average score)

TEST DATA: Dolphins score 96, 108, 89.
Koalas score 88,91, 110
*/

const dolphinsScoreOneTime = Number(prompt("Insert Dolphin's score 1 time"));
const dolphinsScoreTwoTime = Number(prompt("Insert Dolphin's score 2 time"));
const dolphinsScoreThreeTime = Number(prompt("Insert Dolphin's score 3 time"));
const averageScoreDolphins = (dolphinsScoreOneTime + dolphinsScoreTwoTime + dolphinsScoreThreeTime)/3;

const koalasScoreOneTime = Number(prompt("Insert Koalas score 1 time"));
const koalasScoreTwoTime = Number(prompt("Insert Koalas score 2 time"));
const koalasScoreThreeTime = Number(prompt("Insert Koalas score 3 time"));
const averageScoreKoalas = (koalasScoreOneTime + koalasScoreTwoTime + koalasScoreThreeTime)/3;

if (averageScoreDolphins > averageScoreKoalas) {
    console.log('Winner is Dolphins', averageScoreDolphins, averageScoreKoalas)
} else if (averageScoreDolphins < averageScoreKoalas) {
    console.log('Winner is Koalas', averageScoreDolphins, averageScoreKoalas)
} else {
    console.log('Competition not has of vinner', averageScoreDolphins, averageScoreKoalas)
}
//BONUS1

if ((averageScoreDolphins > averageScoreKoalas) && averageScoreDolphins >= 100) {
    console.log('Winner is Dolphins', averageScoreDolphins, averageScoreKoalas)
} else if ((averageScoreDolphins < averageScoreKoalas) && averageScoreKoalas >= 100) {
    console.log('Winner is Koalas', averageScoreDolphins, averageScoreKoalas)
} else {
    console.log('Competition not has of winner', averageScoreDolphins, averageScoreKoalas)
}

//BONUS2

if ((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins && averageScoreKoalas) >= 100) {
    console.log('Winner is Dolphins', averageScoreDolphins, averageScoreKoalas)
} else if ((averageScoreDolphins < averageScoreKoalas) && (averageScoreDolphins && averageScoreKoalas) >= 100) {
    console.log('Winner is Koalas', averageScoreDolphins, averageScoreKoalas)
} else {
    console.log('Competition not has of winner', averageScoreDolphins, averageScoreKoalas)
}