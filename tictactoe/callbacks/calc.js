var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}

var calculator = function(a, b, operand) {
    return operand(a,b);
}

var result = calculator(5, 10, add);
console.log(result);

var result = calculator(20, 10, subtract);
console.log(result);

var result = calculator(3, 2, function(num1, num2) {
    return num1 * num2;
});

console.log(result);

var result = calculator(6, 2, function(num1, num2) {
    return num1 / num2;
});

console.log(result);

//Defining function
var someFunction = function(num1, num2) {
    return (num1 * num2) %5;
}
calculator(100, 5, someFunction);

//Not Defining function
calculator(20, 5, function(num1, num2) {
    return (num1 * num2) %5;
});

var calculator = function(num1, num2) {
    return (num1 + num2);
}
var a = Math.sqrt();

    return

//Long way
calculator(6, 3, function(num1, num2) {
    var result = add(num1, num2);
    
    return Math.sqrt(result);
});

//Short way
calculator(6, 3, function(num1, num2) {
    return Math.sqrt(add(num1, num2));

});