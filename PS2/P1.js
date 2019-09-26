// Elton Cheung
// PS2.P1.js

// Generator yielding the fibonacci sequence.
function* fibonacciGenerator() {
    yield 0; // First fib term is 0.
    yield 1; // Second fib term is 1.
    let lastlast = 0, last = 1;
    while (true) {
        let current = lastlast + last;
        yield current;
        lastlast = last;
        last = current;
    }
}

// Generator yielding only the even fibonacci numbers.
function* evenFibonacciGenerator() {
    let fibGen = fibonacciGenerator();
    while (true) {
        let next = fibGen.next().value;
        if (next % 2 == 0) {
            yield next;
        }
    }
}

const evenFibs = evenFibonacciGenerator();
for (let counter = 0; counter < 10; counter++) {
    console.log(evenFibs.next().value)
}