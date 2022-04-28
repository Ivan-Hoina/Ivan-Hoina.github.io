let first = prompt('Enter first value', '');
let operand = prompt('Enter operand', '+');
let second = prompt('Enter second value', '');

first = parseFloat(first);
second = parseFloat(second);

switch(operand){
    case '+' :
        alert(first + second);
        break;
    case '-' :
        alert(first - second);
        break;
    case '*' :
        alert(first * second);
        break;
    case '/' :
        alert(first / second);
}
