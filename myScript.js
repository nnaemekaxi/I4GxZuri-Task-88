var num1 = prompt("Enter your first number:\n");
var num1 = Number(num1);

var operator = prompt("Choose your operator:\n\nChoose 1 for addition\nChoose 2 for subtraction\nChoose 3 for multiplication\nChoose 4 for division\n")
var operator = Number(operator);

var num2 = prompt("Enter your second number:\n");
var num2 = Number(num2);

var result;

if (operator === 1){
    var result = num1 + num2;
}
else if (operator === 2){
    var result = num1 - num2;
}
else if (operator === 3){
    var result = num1 * num2;
}
else if (operator === 4){
    var result = num1 / num2;
}
else {"Your selection is invalid."}

alert("Result = "+result);
document.write("Result = "+result);

console.log("Result = "+result);