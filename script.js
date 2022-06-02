const firstName = 'Serg';
const job = 'Developer'
const birthDay = 1978;
const year = 2022;

const serg = "I'm " + firstName + ", a " + (year - birthDay) + " year old " + job + "!";
const serg2 = `I'm ${firstName} , a ${year - birthDay} year old ${job}!`
console.log(serg);
console.log(serg2);