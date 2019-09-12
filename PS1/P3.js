// name: Elton Cheung
// PS1.P3.js

const apply = (string, func) => {
    return func(string);
}

const string = 'supercalifragilisticexpialidocious';

// Breaks a string on c
console.log(`${apply(string, (input) => {
    let array = input.split('c');
    for (let index = 1; index < array.length; index++) {
        array[index] = 'c' + array[index];
    }
    return array;
})}`);

// Returns an object
console.log(`${JSON.stringify(apply(string, (input) => {
    let output = {}, numAs = 0;
    output.originalString = input;
    for (let char of input) {
        if (char === 'a') { numAs += 1; }
    }
    output.modifiedString = input.replace(/a/g, 'A');
    output.numberReplaced = numAs;
    output.length = input.length;
    return output;
}))}`);
