/*
Improove challenge1

Use a template string to include the BMI values in the output

Use if/else statement
*/

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

// const markWeight = 95;
// const johnWeight = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;

const markBMI = markWeight/markHeight**2;
const johnBMI = johnWeight/johnHeight**2;

let markHigherBMI = markBMI > johnBMI;

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is heigher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is heigher than Mark's (${markBMI})`);
}