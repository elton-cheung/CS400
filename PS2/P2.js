// Elton Cheung
// PS2.P2.js

function* words(sentence) {
    let index = 0, arrayOfWords = sentence.split(" "), length = arrayOfWords.length;
    while (index < length) {
        yield arrayOfWords[index];
        index++;
    }
}

const testcase = words("All I know is something like a bird within her sang");

for (const value of testcase) {
    console.log(value);
}