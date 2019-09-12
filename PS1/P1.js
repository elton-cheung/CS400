// name: Elton Cheung
// PS1.P1.js

const sortString = (string) => {
    array = []
    for (let char of string) {
        if (char >= 'A' && char <= 'z') { array.push(char); }
    }
    return array.sort().join("");
}

// Test cases
console.log(sortString('‘supercalifragilisticexpialidocious’'));
console.log(sortString('d     b c !!!!! a'));