/*
Mark and John are trying to compare their BMI.
It is calculated using the formula:

BMI = mass/height **2 = mass/(height*height).

mass in kg and height in meter

1. Store Mark`s and John`s mass and height in variables
2. Calculate them BMI using the formula (yoy can implement both variants)
3. Create a boolean variable 'markHigherBMI' containing information about whether
Mark has a higher BMI than John

TEST DATA 1: Mark Weights 78kg and is 1.69m tall.
John weights 92kg and is 1.95m tall.
TEST DATA 2: Mark Weights 95kg and is 1.88m tall.
John weights 85kg and is 1.76m tall.
*/

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markWeightV2 = 95;
const johnWeightV2 = 85;
const markHeightV2 = 1.88;
const johnHeightV2 = 1.76;

const markBMI = markWeight/markHeight**2;
const johnBMI = johnWeight/johnHeight**2;

const markBMIV2 = markWeightV2/(markHeightV2*markHeightV2);
const johnBMIV2 = johnWeightV2/(johnHeightV2*johnHeightV2);

let markHigherBMI = markBMI > johnBMI;
let markHigherBMIV2 = markBMIV2 > johnBMIV2;

console.log('markBMI:', markBMI, 'johnBMI:', johnBMI);
console.log(markHigherBMI);
console.log('markBMI:', markBMIV2, 'johnBMI:', johnBMIV2);
console.log(markHigherBMIV2);