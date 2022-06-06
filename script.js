const arr = [1, [2, 3], 7];
[a, b, c] = arr;
const arr2 = [a, ...b, c];
console.log(arr2);
