// 1. Direct replacement

function name() {
    // stuff
}

name();
name();
name();


// 2. Expression replacement

function name() {
    return 72 * 2;
}

console.log(name());


// 3. Direct w/ parameters - arguments

function name(cakeType) {
    // make the cake
    // ask questions about the parameter

    // questions look like:
    if (cakeType ...) {
        // do something slightly different
    } else {
        // do something different again
    }
}

name('chocolate');
name('chocolate');
name('cheesecake');


// 4. Expression replacement w/ parameters

function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(72, 2));


// 5. Direct & Expression w/ parameters

function bakeCake(cakeTypes) {
    // make the cakes
    // does something different depending on cakeType

    return 'delicious!';
}

console.log(bakeCake('cheesecake'));
