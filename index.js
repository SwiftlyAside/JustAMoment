const calculator = {

    plus(a, b) {
        return a + b;
    },

    minus(a, b) {
        return a - b;
    },

    mul(a, b) {
        return a * b;
    },

    div(a, b) {
        return a / b;
    },

    pow(a, b) {
        return a ** b;
    }

};

// console.log(greetYou);
const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 5);
const mul = calculator.mul(7, 6);
const div = calculator.div(26 / 2);
const pow = calculator.pow(5, 4);

console.log(`plus: ${plus}, minus: ${minus}, mul: ${mul}, div: ${div}, pow: ${pow}`);