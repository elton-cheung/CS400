// Elton Cheung
// PS2.P3.js

const cube = n => Math.pow(n, 3);
const testcase = [1, 2, 3, 4, 5, 6, 7];
console.log(testcase.map(elem => cube(elem)));