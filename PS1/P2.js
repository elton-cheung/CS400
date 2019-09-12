// name: Elton Cheung
// PS1.P2.js

const evaluate = (string) => {
    let left = string.charAt(0), operator = string.charAt(1), right = string.charAt(2);
    let result;
    switch(operator) {
        case '+':
            result = parseInt(left) + parseInt(right);
            break;
        case '-':
            result = parseInt(left) - parseInt(right);
            break;
        case '*':
            result = parseInt(left) * parseInt(right);
            break;
        case '/':
            result = parseInt(left) / parseInt(right);
            break;
        case '%':
            result = parseInt(left) % parseInt(right);
            break;
        default:
            return 'Operator must be +, -, *, /, %';
    }
    return result;

}

const e1 = '3+4', e2 = '3-4', e3 = '3*4', e4 = '3/4', e5 = '3%4';
console.log(`${e1} = ${evaluate(e1)}`);
console.log(`${e2} = ${evaluate(e2)}`);
console.log(`${e3} = ${evaluate(e3)}`);
console.log(`${e4} = ${evaluate(e4)}`);
console.log(`${e5} = ${evaluate(e5)}`);